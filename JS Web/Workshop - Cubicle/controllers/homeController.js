const Cubic = require("../models/cubicModel");

function getHome(req, res) {
  req.app.locals.title = 'Home';

  Cubic.find(function(err, cubics){
    if(err) throw err;

    res.render("index", { cubes: cubics });
  })
};

function getAbout(req, res) {
  req.app.locals.title = 'About';

  res.render("about");
};

function getNotFound(req, res) {
  req.app.locals.title = '404';

  res.render("404");
};

module.exports = {
  getHome,
  getAbout,
  getNotFound
}