const path = require('path');

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/login", function(req, res) {
    res.render('login');
  });

  // authenticated route
  app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    console.log(req.user);
    res.render('authenticated', { user: req.user });
  });

};
