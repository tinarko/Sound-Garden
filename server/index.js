let dotenv = require('dotenv')
<<<<<<< HEAD
var path = require('path');
=======
>>>>>>> (Deploy) Update files for Heroku
dotenv.load();
dotenv.config({path: process.env.PWD + '/config.env'});

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var http = require('http');
http.createServer(function(req, res) {});

// import passport authentication strategies
var authentication = require('./authentication');
// var config = require('./../config/config');
var db = require('./../database/index');
var requestHandler = require('./requestHandler');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session for authentication, parse cookies
app.use(cookieParser());
app.use(session({
  secret: 'financialAdvisorly',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + './../client/dist'));

app.get('/auth/facebook', 
  passport.authenticate('facebook', {scope: 'email'}));
app.get('/auth/facebook/return', 
  passport.authenticate('facebook', { 
    successRedirect: '/',
    // failureRedirect: '/login', 
  }),
  (req, res) => {
    // write cookie
    res.cookie('advisorly', 'loggedIn');
    // redirect home on successful login
    res.redirect('/');
  });

app.post('/plaid/access_token', requestHandler.plaid.accessToken);

app.get('/budget/getuserbudgets/:id', requestHandler.budget.getUserBudgets);


app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname,'..','client', 'dist', 'index.html'));
});

let port = process.env.PORT || 1337;

// http.createServer(onRequest).listen(process.env.PORT || 6000);

app.listen(port, function() {
  console.log('listening on ' + port + '!');

});

