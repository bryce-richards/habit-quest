
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing; commenting out until we have sequelize models
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Handlebars setup
var hbs = require('express-hbs');

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Static directory
app.use(express.static("./public"));

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


// // starting the app without sequelize
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
