const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main'); 
/* GET home page. */
router.get('/', ctrlMain.index);
/* POST login. */
router.post('/login', ctrlMain.login);
/* GET dashboard page. */
router.get('/dashboard', ctrlMain.dashboard);
/* GET register page. */
router.get('/register', ctrlMain.register);
module.exports = router;

