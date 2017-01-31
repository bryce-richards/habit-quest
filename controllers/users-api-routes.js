var express = require("express");
var db = require("../models");
var router = express.Router();

	router.get("/api/users", function (req, res) {
		db.User.findAll({}).then(function(allUsers) {
			console.log(allUsers);
			res.json(allUsers);
		});
	});

	router.get('/api/users/:user_id', function (req,res) {
		db.User.findOne({
			where: {
				id:req.params.user_id
			}
		}).then(function(dbUser) {
			console.log(dbUser);
			res.json(dbUser);
		});
	});

	router.post("/api/users", function(req, res) {
		// console.log(req.body);
		db.User.create({
			userName: req.body.userName,
			password: req.body.password,
			email: req.body.email,
			avatar: req.body.avatar
		}).then(function(dbUser) {
			res.redirect('/api/users');
		});
	});

	router.delete("api/users/:users_id", function(req,res) {
		db.User.destroy({
			where: {
				id: req.body.users_id
			}
		}).then(function(deleteAUser) {
			res.json(deleteUser);
		});
	});

module.exports = router;



