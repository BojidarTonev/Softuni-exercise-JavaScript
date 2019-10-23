const auth = require('../utils/auth');

const homeController = require('../controllers/homeController');
const usersController = require('../controllers/usersController');
const coursesController = require('../controllers/coursesController')


module.exports = (app) => {
    //home controller routes
    app.get('/', auth(false), homeController.getHome);

    //users controller routes
    app.get('/users/login', auth(false), usersController.getLogin);
    app.post('/users/login', auth(false), usersController.postLogin);
    app.get('/users/register', auth(false), usersController.getRegister);
    app.post('/users/register', auth(false), usersController.postRegister);
    app.get('/users/logout', auth(), usersController.getLogout);

    //courses controller routes
    app.get('/courses/create', auth(), coursesController.getCreate);
    app.post('/courses/create', auth(), coursesController.postCreate);
    app.get('/courses/course-details/:id', auth(), coursesController.getDetails);
    app.get('/courses/course-edit/:id', auth(), coursesController.getEdit);
    app.post('/courses/course-edit/:id', auth(), coursesController.postEdit);
    app.get('/courses/course-delete/:id', auth(), coursesController.deleteCourse);
    app.get('/courses/enroll/:id', auth(), coursesController.enrollUser);

    //404 route
    app.get('*', homeController.getNotFound);
};