const path = require('path');

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/login", function(req, res) {
    res.render('login');
  });

  app.get("/profile", (req, res) => {
    res.render('authenticated');
  });
}
