const mongoose = require('mongoose');

const Build = mongoose.model('Build');

function sendError(error, res) {
  if (error.name === 'CastError') {
    res.status(400).json({ message: 'Invalid build id' });
  } else {
    res.status(500).json({ message: 'Something went wrong on the server' });
  }
}

/* GET all builds as JSON */
const getBuilds = async function(req, res){
  try {
    const category = req.query.category;
    let builds;
    if (!category) {
      builds = await Build.find();
    } else {
      const allowed = ['Exterior', 'Engine', 'Interior', 'Other'];
      let found = false;
      for (let i = 0; i < allowed.length; i++) {
        if (allowed[i] === category) {
          found = true;
        }
      }
      if (found === false) {
        res.status(400).json({ message: 'Invalid category. Use Exterior, Engine, Interior or Other' });
        return;
      }
      builds = await Build.find({ category: category });
    }
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
  getOneBuild,
};
