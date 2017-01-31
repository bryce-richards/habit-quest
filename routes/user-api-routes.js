/*jshint esversion: 6*/

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
      userName: user.userName,
      email: user.email,
      password: user.password,
      imageUrl: user.imageUrl
    }).then((data) => {
      res.redirect('/profile');
      res.json(data);
    }).catch((e) => {
      res.json({
        error: e
      });
    });

  });

  app.get('/api/users', function (req, res) {
    db.User.findAll({}).then(function(allUsers) {
      console.log(allUsers);
      res.json(allUsers);
    });
  });

  app.get('/api/profile/:user_id', function (req,res) {
    db.User.findOne({
      where: {
        id:req.params.user_id
      }
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });

  app.delete('/api/profile/:user_id', function(req,res) {
    db.User.destroy({
      where: {
        id: req.body.users_id
      }
    }).then(function(deleteAUser) {
      res.json(deleteUser);
    });
  });

};
