const passport = require('passport');

module.exports = function(app) {

  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/something-else' }),
    function(req, res) {

      res.redirect('/profile');
    });

}
