const axios = require('axios');

/* Login details are read from the environment, not hard-coded in source. */
try { require('dotenv').config(); } catch (_) { /* dotenv not installed; rely on process.env */ }

const mockUser = {
  username: process.env.APP_USERNAME,
  password: process.env.APP_PASSWORD
};
if (!mockUser.username || !mockUser.password) {
  throw new Error('APP_USERNAME and APP_PASSWORD environment variables must be set for login.');
}

const getApiUrl = function(req) {
  return req.protocol + '://' + req.get('host') + '/api';
};

/* GET home page */
const index = function(req, res){
  res.render('login', { title: 'Login' });
};

/* POST login */
const login = function(req, res){
  if (req.body.username === mockUser.username && req.body.password === mockUser.password) {
    res.redirect('/dashboard');
  } else {
    res.render('login', { title: 'Login', error: 'Incorrect username or password' });
  }
};

/* GET dashboard page */
const dashboard = async function(req, res){
  /* get the builds from our own API */
  let builds = [];
  let error_msg = '';
  try {
    const response = await axios.get(getApiUrl(req) + '/builds');
    builds = response.data;
  } catch (err) {
    if (err.response) {
      error_msg = 'Could not load builds from the API (error ' + err.response.status + ')';
    } else {
      error_msg = 'Could not reach the API';
    }
  }
  res.render('dashboard', { title: 'Browse Builds', builds, error_msg });
};

/* GET register page */
const register = function(req, res){
  res.render('register', { title: 'Register' });
};

module.exports = {
  index,
  login,
  dashboard,
  register
};
