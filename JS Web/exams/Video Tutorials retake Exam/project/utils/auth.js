const jwt = require("./jwt");
const blackListModel = require("../models/tokenBlackList");
const Users = require("../models/User");
const appConfig = require("../config/app-config");

function auth(redirectUnauthenticated = true) {
  return function(req, res, next) {
    const token = req.cookies[appConfig.authCookieName];
    Promise.all([jwt.verifyToken(token), blackListModel.findOne({ token })])
      .then(([data, blacklistedToken]) => {
        if (blacklistedToken) {
          return Promise.reject(new Error("blacklisted token"));
        }
        Users.findById(data.id).then(user => {
          req.user = user;
          next();
        });
      })
      .catch(err => {
        if (!redirectUnauthenticated) { next(); return; }
        if (
          [
            "token expired", 
            "blacklisted token", 
            "jwt must be provided"
          ].includes(err.message)
        ) {
          res.redirect("/users/login");
          return;
        }
        next(err);
      });
    
  }
}

module.exports = auth
