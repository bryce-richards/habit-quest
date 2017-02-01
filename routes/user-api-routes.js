/*jshint esversion: 6*/
const passport = require('passport');
const db = require("../models");

module.exports = function(app) {

  // route to fetch challenge by id
  app.get('/api/user', (req, res) => {
  var id = req.user.id
  db.User.findOne({
    where: {
      id: id
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

  app.get('/api/users', (req, res) => {

  db.User.findAll().then((data) => {
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
      req.session.user = req.user;
      res.redirect('/profile/');
    });

  app.post('/signup', (req, res) => {

    var user = req.body;

    db.User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      imageUrl: user.imageUrl
    }).then((data) => {
      res.redirect('/signin');
    }).catch((e) => {
      res.json({
        error: e
      });
    });

  });

};
