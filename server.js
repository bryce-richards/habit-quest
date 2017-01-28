
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
// var db = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing; commenting out until we have sequelize models
var db = require("./models");

passport.use(new Strategy(
  function(username, password, cb) {

    db.Users.findOne({where: {username: username}})
    .then((user) => {
      // handle case where there is no existing user with the username
      if(!user) {
        return cb(null, false)
      }
      // handle case where password is incorrect
      if(user.password != password) {
        return cb(null, false)
      }
      // success case for correct password
      return cb(null, user)
    })
    .catch((e) => {
      // database error
      return cb(e)
    });

  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.Users.findById(id)
  .then((user) => {
    cb(null, user);
  })
  .catch((e) => {
    return cb(e);
  });
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("./public"));

app.use(passport.initialize());
app.use(passport.session());

// Routes =============================================================
require("./routes/html-routes.js")(app);

// comment out user routes file until we have routes
// require("./routes/user-api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
