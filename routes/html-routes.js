const path = require('path');

module.exports = function(app) {
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname + "/../public/index.html"));
    res.render('index');
  });

  app.get("/login", function(req, res) {
    res.render('login');
  });
}
