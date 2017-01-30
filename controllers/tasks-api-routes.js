var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/api/:user_id/:challenge_id/task", function (req, res) {
	db.Challenge.findAll({
		where: {
			UserId: req.params.user_id,
		}
	}).then(function(challPerUser) {
		var hbsObject = {
			Challenges: challPerUser
		};
		console.log(tasksPerChallenge);
	});
});

router.post("/api/task/:challenge_id", function (req, res) {
	db.Task.create({
		taskName: req.body.taskName,
		countComplete: req.body.countComplete,
		targetComplete: req.body.targetComplete,
		taskDate: req.body.taskDate,
		taskEnd: req.body.taskEnd,
		ChallengeId: req.params.challenge_id
	}).then(function(newTask) {
		res.json(newTask);
		console.log(newTask);
	});
});