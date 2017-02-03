/*jshint esversion: 6*/

var db = require('../models');

module.exports = function(app) {

  // route to fetch all challenges using logged in user's id
  app.get('/api/challenges', (req, res) => {
    var id = req.user.id;

    db.Challenge.findAll({
      where: {
        UserId: id
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

  // route to fetch challenges by id
  app.get('/api/challenge', (req, res) => {
    db.Challenge.findOne({
      where: {
        id: req.body.id
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

  // route to create challenge using logged in user's id
  app.post('/api/challenge', (req, res) => {
    var id = req.user.id;

    db.Challenge.create({
      title: req.body.title,
      description: req.body.description,
      purpose: req.body.purpose,
      private: req.body.private,
      imageUrl: req.body.challengeImageUrl,
      UserId: id
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


// route to delete ALL of the logged in user's challenges
  app.delete("/api/challenge", (req, res) => {
    var id = req.user.id;

    db.User.destroy({
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

};
