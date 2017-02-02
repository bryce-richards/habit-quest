/*jshint esversion: 6*/

const passport = require('passport');
const db = require("../models");

module.exports = function(app) {

	app.get('/profile/challenges/:user_id', function(req,res) {
		db.Challenge.findAll({
			where: {
				UserId: req.params.user_id
			}, include:[db.User]
		}).then(function(userChallenges) {
			res.json(userChallenges);
		});
	});

	app.post('/profile/challenges/:user_id', function(req, res) {
		var challenge = req.body;
		db.Challenge.create({

			challenge: challenge.challenge,
			title: challenge.title,
			description: challenge.description,
			purpose: challenge.purpose,
			private: challenge.private,
			challengeImageUrl: challenge.challengeImageUrl,
			UserId: req.params.user_id
		}).then(function(challengeCreate) {
			res.json(challengeCreate);
		});
	});

	app.delete("/api/profile/challenges/:users_id", function(req,res) {
		db.User.destroy({
			where: {
				id: req.body.users_id
			}
		}).then(function(deleteUser) {
			res.json(deleteUser);
		});
	});
};