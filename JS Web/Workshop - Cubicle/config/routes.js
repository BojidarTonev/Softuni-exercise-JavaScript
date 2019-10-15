const auth = require('../utils/auth');

const homeController = require('../controllers/homeController');
const cubicController = require('../controllers/cubicController');
const accessoriesController = require('../controllers/accessoriesController');
const usersController = require('../controllers/usersController');



module.exports = (app) => {
    //home controller routes
    app.get('/', homeController.getHome);
    app.get('/about', homeController.getAbout);

    //cubes controller routes
    app.get('/cubes/create', auth(), cubicController.getCreate);
    app.post('/cubes/create', auth(), cubicController.postCreate);
    app.get('/cubes/details/:id', auth(), cubicController.getDetails);
    app.get('/cubes/edit/:id', auth(), cubicController.getEdit);
    app.post('/cubes/edit/:id', auth(), cubicController.postEdit);
    app.get('/cubes/delete/:id', auth(), cubicController.getDelete);
    app.post('/cubes/delete/:id', auth(), cubicController.postDelete);

    //accessories controller routes
    app.get('/accessories/create', auth(), accessoriesController.getCreateAccessory);
    app.post('/accessories/create', auth(), accessoriesController.postCreateAccessory);
    app.get('/accessories/attach/:id', auth(), accessoriesController.getAttachAccessory);
    app.post('/accessories/attach', auth(), accessoriesController.postAttachAccessory);

    //users controller routes
    app.get('/users/login', usersController.getLogin);
    app.post('/users/login', usersController.postLogin);
    app.get('/users/register', usersController.getRegister);
    app.post('/users/register', usersController.postRegister);
    app.get('/users/logout', usersController.getLogout);

    //404 route
    app.get('*', homeController.getNotFound);
};