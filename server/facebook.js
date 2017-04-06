// http://passportjs.org/docs

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./configAuth');
var db = require('../database/index');
var User = db.user;

passport.use(new FacebookStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: config.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
  //   User.findOrCreate(..., function(err, user) {
  //     if (err) {
  //       return done(err);
  //     } else {
  //       done(null, user);
  //     }
  //   });
  // }
  console.log('hi');
// )
}
));

