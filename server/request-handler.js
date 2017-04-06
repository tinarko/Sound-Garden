var passport = require('passport');
var facebook = require('./facebook');

module.exports.authenticate = passport.authenticate('facebook');

module.exports.authenticateCallback = passport.authenticate(
  'facebook', 
  {
    successRedirect: '/',
    successFlash: 'Welcome to Financial Advisorly!',
    failureRedirect: '/login',
    failureFlash: true
  }
);