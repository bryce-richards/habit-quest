var express = require("express");
var db = require("../models");
var router = express.Router();

	router.get('/', function (req, res) {
		res.redirect("/api/user");
	});

	router.get("/api/user", function (req, res) {
		db.User.findAll({}).then(function(dbUser) {
			res.render("index", dbUser);
		});
	});

	router.get('/api/user/:user_id', function (req,res) {
		db.User.findone({
			where: {
				id:req.params.id
			}
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});

	router.post("/api/user", function(req, res) {
		// console.log(req.body);
		db.User.create({
			userName: req.body.userName,
			password: req.body.password,
			email: req.body.email,
			avatar: req.body.avatar
		}).then(function(dbUser) {
			res.redirect('/api/user');
		});
	});

module.exports = router;


// router.post('/index', function (req, res){
// 	console.log('BURGER NAME: '+req.body.burger_name);
// 	burger.insertOne([
// 		'burger_name', 'devoured'], [req.body.burger_name, 1], function(){
// 			res.redirect('/index');
// 		});
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/index");
//   });
// });



