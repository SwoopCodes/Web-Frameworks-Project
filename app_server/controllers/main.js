/* Hard-coded login details */
const mockUser = {
username: 'user',
password: 'REDACTED'
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
const dashboard = function(req, res){
res.render('dashboard', { title: 'Dashboard' });
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
