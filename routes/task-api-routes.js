/*jshint esversion: 6*/

var db = require('../models');

module.exports = function(app) {
  // route to fetch all tasks for logged in user
  app.get('/api/task', (req, res) => {
    var id = req.user.id;

    db.Task.findAll({
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

  // route to fetch task by challenge id
  app.get('/api/task/:challenge_id', (req, res) => {

    db.Task.findOne({
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
  		ChallengeId: req.params.challenge_id,
  		UserId: req.user.id
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

  // route to update the tasks' checked
  app.post("/api/update/task", (req, res) => {
    db.Task.update({
    countComplete: req.body.countComplete,
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

};
