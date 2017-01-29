var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("'/api/user/challenge", function (req, res) {
		db.User.findAll({}).then(function(dbUser) {
			res.render("index", dbUser);
		});
	});

router.post('/api/user/challenge/:user_id', function(req, res) {
	db.Challenge.create({
		challenge: req.body.challenge,
		title: req.body.title,
		description: req.body.description,
		purpose: req.body.purpose,
		private: req.body.private,
		challengeImageUrl: req.body.challengeImageUrl,
		UserId: req.params.user_id
	}).then(function(challengeCreate) {
		res.json(challengeCreate);
	});
});

module.exports = router;