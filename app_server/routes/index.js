const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main'); 
/* GET home page. */
router.get('/', ctrlMain.index);
/* GET register page. */
router.get('/register', ctrlMain.register);
module.exports = router;

