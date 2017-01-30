const passport = require('passport');
const db = require("../models");

module.exports = function(app) {

  // route to fetch challenge by id
  app.get('/api/user', (req, res) => {

    db.User.findOne({
      where: {
        id: 1
      }
    }).then((data) => {
      res.json({
        success: true,
        data: data
      });
    }).catch((e) => {
      res.json({
        success: false,
        error: e
      });
    });

  });

  app.post('/signin',
    passport.authenticate('local', { failureRedirect: '/signin' }),
    function(req, res) {

      res.redirect('/profile');

    });

  app.post('/signup', (req, res) => {

    var user = req.body;

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
