const mongoose = require('mongoose');

const Build = mongoose.model('Build');

function sendError(error, res) {
  if (error.name === 'CastError') {
    res.status(400).json({ message: 'Invalid build id' });
  } else {
    res.status(500).json({ message: 'Something went wrong on the server' });
  }
}

/* GET all builds as JSON, newest first */
const getBuilds = async function(req, res){
  try {
    const builds = await Build.find().sort({ createdOn: -1 });
    res.status(200).json(builds);
  } catch (error) {
    sendError(error, res);
  }
};

/* GET one build as JSON */
const getOneBuild = async function(req, res){
  try {
    const build = await Build.findById(req.params.buildid);
    if (build === null) {
      res.status(404).json({ message: 'Build not found' });
    } else {
      res.status(200).json(build);
    }
  } catch (error) {
    sendError(error, res);
  }
};

module.exports = {
  getBuilds,
  getOneBuild
};
