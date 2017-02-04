/*jshint esversion: 6*/
const passport = require('passport');
const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function(app) {

  // route to fetch challenge by id
  app.get('/api/user', (req, res) => {
  var id = req.user.id;
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

  // route to get all users
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

  // route to log a user in
  app.post('/signin',
    passport.authenticate('local', { failureRedirect: '/signin' }),
    function(req, res) {
      req.session.user = req.user;
      res.redirect('/profile/');
    });

  // route to create a new user
  app.post('/signup', (req, res) => {

    var user = req.body;

    bcrypt.hash(user.password, saltRounds, function(err, hash) {

        var encryptedPassword = hash;

        db.User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          password: hash
        }).then((data) => {
          res.redirect('/signin');
        }).catch((e) => {
          res.json({
            error: e
          });
        });

    });


  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/signin");
  })

};
