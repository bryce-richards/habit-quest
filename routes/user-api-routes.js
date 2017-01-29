const passport = require('passport');

module.exports = function(app) {

  app.post('/signin',
    passport.authenticate('local', { failureRedirect: '/signin' }),
    function(req, res) {

      res.redirect('/profile');

    });

  app.post('/signup', (req, res) => {
    var user = req.body;
    console.log(user);
    
    res.json({
      message: "created user"
    });
  });

}
