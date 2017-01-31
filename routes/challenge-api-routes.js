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

  // route to fetch challenge by id
  app.get('/api/challenge/:id', (req, res) => {

    db.Challenge.findOne({
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

  // route to create challenge
  app.post('/api/challenge', (req, res) => {

    db.Challenge.create({
      title: req.body.title
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

}
