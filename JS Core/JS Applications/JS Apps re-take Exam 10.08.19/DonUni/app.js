window.onload = () => {
    Sammy('#rooter', function() {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('#/home', homeController.getHome);
        
        //User
        this.get('#/register', usersController.getRegister);
        this.get('#/login', usersController.getLogin);

        this.post('#/register', usersController.postRegister);
        this.post('#/login', usersController.postLogin);
        this.get('#/logout', usersController.logout);

        //Causes
        this.get('#/create', causesController.getCreate);
        this.post('#/create', causesController.postCreate);
        this.get('#/all', causesController.getAll);
        this.get('#/details/:id', causesController.getDetails);
        this.get('#/delete/:id', causesController.deleteCause);
        this.post('#/donate/:id', causesController.donateCause);
        this.get('#/donate/:id', causesController.donateCause);


    }).run('#/home');
}