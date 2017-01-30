const passport = require('passport');
const db = require("../models");

module.exports = function(app) {

  app.post('/signin',
    passport.authenticate('local', { failureRedirect: '/signin' }),
    function(req, res) {

      res.redirect('/profile');

    });

  app.post('/signup', (req, res) => {

    var user = req.body;
    // console.log(db);

    db.User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    }).then((data) => {
      res.redirect('/profile');
    }).catch((e) => {
      res.json({
        error: e
      });
    });

  });

}
