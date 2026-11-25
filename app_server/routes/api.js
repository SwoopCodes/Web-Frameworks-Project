const express = require('express');
const router = express.Router();

const ctrlBuilds = require('../controllers/builds');

router.use(function (req, res, next) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.set('Allow', 'GET');
    res.status(405).json({ message: 'This API is read only. Only GET is allowed.' });
  } else {
    next();
  }
});

/* GET all builds. */
router.get('/builds', ctrlBuilds.getBuilds);

/* GET one build. */
router.get('/builds/:buildid', ctrlBuilds.getOneBuild);

module.exports = router;
