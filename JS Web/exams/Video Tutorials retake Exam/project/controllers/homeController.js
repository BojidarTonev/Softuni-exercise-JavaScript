const models = require('../models')

function getHome(req, res) {
  req.app.locals.title = 'Home';

  models.courseModel.find().then(courses => {
    if(req.user){
      let displayCourses = courses.filter(c => c.isPublic).sort(c => c.createdAt).reverse();
      res.render('../views/home-user.hbs', {courses: displayCourses, user: req.user})
    } else {  
      let displayCourses = courses.filter(c => c.isPublic).sort(c => c.usersEnrolled.length).slice(0, 3);

      res.render('../views/home-guest', {courses: displayCourses, user: req.user})
    }
  })
};

function getNotFound(req, res) {
  req.app.locals.title = '404';

  res.render("404");
};

module.exports = {
  getHome,
  getNotFound
}