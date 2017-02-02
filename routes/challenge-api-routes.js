/*jshint esversion: 6*/

var db = require('../models');

module.exports = function(app) {
  // route to fetch all challenges
  app.get('/api/challenge', (req, res) => {

    db.Challenge.findAll().then((data) => {
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

  // route to fetch challenge by foreign key user id
  app.get('/api/challenge/:user_id', (req, res) => {

    db.Challenge.findAll({
      where: {
        UserId: req.params.user_id
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

  // route to create challenge. Has to be associated with user id
  app.post('/api/challenge/:user_id', (req, res) => {

    db.Challenge.create({
      challenge: req.body.challenge,
      title: req.body.title,
      description: req.body.description,
      purpose: req.body.purpose,
      private: req.body.private,
      challengeImageUrl: req.body.challengeImageUrl,
      UserId: req.params.user_id
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

  // route to delete Users
  app.post("/api/challenge/:user_id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.body.users_id
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

};


