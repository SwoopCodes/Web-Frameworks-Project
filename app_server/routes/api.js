const express = require('express');
const router = express.Router();

const ctrlBuilds = require('../controllers/builds');

/* GET all builds. */
router.get('/builds', ctrlBuilds.getBuilds);

/* GET one build. */
router.get('/builds/:buildid', ctrlBuilds.getOneBuild);

module.exports = router;
