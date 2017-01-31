/*jshint esversion: 6*/

var db = require('../models');

module.exports = function(app) {
  // route to fetch all tasks
  app.get('/api/task', (req, res) => {

    db.Task.findAll().then((data) => {
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

  //route to fetch task by challenge id
  app.get('/api/task/:challenge_id', (req, res) => {

    db.Task.findAll({
      where: {
        ChallengeId: req.params.challenge_id
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

  // route to create task
  app.post('/api/task/:challenge_id', (req, res) => {

  	db.Task.create({
  		taskName: req.body.taskName,
  		countComplete: req.body.countComplete,
  		targetComplete: req.body.targetComplete,
  		taskEnd: req.body.taskEnd,
  		ChallengeId: req.params.challenge_id
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