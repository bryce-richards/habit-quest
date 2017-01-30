var express = require("express");
var db = require("../models");
var router = express.Router();



router.get("/api/challenges/:user_id", function(req,res) {
	db.Challenge.findAll({
		where: {
			UserId: req.params.user_id
		}
	}).then(function(userChallenges) {
		console.log(userChallenges);
		res.json(userChallenges);
	});
});

router.post('/api/challenges/:user_id', function(req, res) {
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

router.delete("api/challenges/:users_id", function(req,res) {
	db.User.destroy({
		where: {
			id: req.body.users_id
		}
	}).then(function(deleteAUser) {
		res.json(deleteUser);
	});
});




module.exports = router;