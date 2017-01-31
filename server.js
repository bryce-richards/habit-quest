/*jshint esversion:6*/
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing; commenting out until we have sequelize models
var db = require("./models");


passport.use(new Strategy({
  usernameField: 'email'
},
  function(email, password, cb) {
    db.User.findOne({where: {email: email}})
    .then((user) => {
      // handle case where there is no existing user with the username
      if(!user) {
        return cb(null, false);
      }
      // handle case where password is incorrect
      if(user.password != password) {
        return cb(null, false);
      }
      // success case for correct password
      return cb(null, user);
    })
    .catch((e) => {
      // database error
      return cb(e);
    });

  }));

passport.serializeUser(function(user, cb) {
  // console.dir(user);
  console.log(user.id);
  console.log('serializeUser');
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  console.log('deserializeUser');
  db.User.findById(id)
  .then((user) => {
    cb(null, user);
  })
  .catch((e) => {
    return cb(e);
  });
});

// Sets up the Express app to handle data parsing
app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Static directory
app.use(express.static(__dirname + '/src/client/public'));

app.use(passport.initialize());
app.use(passport.session());

// Routes =============================================================

// API routes first
require("./routes/user-api-routes.js")(app);
require("./routes/challenge-api-routes.js")(app);

// React Router setup
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, './src/client/public', 'index.html'));
});




// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
