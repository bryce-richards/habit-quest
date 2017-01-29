const passport = require('passport');

module.exports = function(app) {

  app.post('/signin',
    passport.authenticate('local', { failureRedirect: '/signin' }),
    function(req, res) {

      res.redirect('/profile');

    });

}
