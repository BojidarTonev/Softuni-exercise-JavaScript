const jwt = require('../utils/jwt');
const User = require("../models/User");
const appConfig = require('../config/app-config');
const blacklist = require('../models/tokenBlackList');

function getLogin(req, res) {
  req.app.locals.title = 'Login';
  res.render("users/login");
};

function postLogin(req, res) {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => Promise.all([user, user.matchPassword(password)]))
    .then(([user, match]) => {
       if(!match){
         res.render('users/login', { message: 'Wrong password or username!'});
         return;
       }
       res.app.locals.loggedIn = true;
       const token = jwt.createToken({ id:user._id });
       res.cookie(appConfig.authCookieName, token).redirect('/');
    })
};

function getRegister(req, res) {
  req.app.locals.title = 'Register';

  res.render("users/register");
};

function postRegister(req, res, next) {
  const { username, password, repeatPassword } = req.body;

  if(password != repeatPassword) {
    res.render('/users/register', { 
      errors: {
        repeatPassword: 'Password and repeat password dont match!'
      }
    })

    return;
  }

  return User.create({ username, password }).then(() => {
    res.redirect('/users/login');
  }).catch(err => {
    if(err.name == 'MongoError' && err.code == 11000) {
      res.render('/users/register', {
        errors: {
          username: 'Username already taken!'
        }
      });

      return;
    }


    next(err)
  })
};

function getLogout(req, res) {
  let token = req.cookies[appConfig.authCookieName];
  blacklist.create({ token }).then(() => {
    res.clearCookie(appConfig.authCookieName).redirect('/')
  })
  
  res.app.locals.loggedIn = false;
};

module.exports = {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  getLogout
}
