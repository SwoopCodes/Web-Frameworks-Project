/* Hard-coded login details */
const mockUser = {
username: 'user',
password: 'user'
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
const url = req.protocol + '://' + req.get('host') + '/api/builds';
let builds = [];
try {
const response = await fetch(url);
if (response.ok) {
builds = await response.json();
}
} catch (err) {
console.log('Could not load builds: ' + err.message);
}
res.render('dashboard', { title: 'Browse Builds', builds });
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
