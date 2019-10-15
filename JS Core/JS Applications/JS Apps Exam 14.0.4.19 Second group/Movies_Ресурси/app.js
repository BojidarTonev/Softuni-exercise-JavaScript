window.onload = () => {
    Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('#/home', homeController.getHome);
        
        //User
        this.get('#/register', userController.getRegister);
        this.get('#/login', userController.getLogin);

        this.post('#/register', userController.postRegister);
        this.post('#/login', userController.postLogin);
        this.get('#/logout', userController.logout);

        //Movies
        this.get('#/add-movie', moviesController.getAddMovies);
        this.post('#/add-movie', moviesController.postAddMovies);
        

        this.get('#/cinema', moviesController.loadCinema);

        this.get('#/my-movies', moviesController.getMyMovies);

        this.get('#/movies/edit-movie/:id', moviesController.getEditMovie);
        this.post('#/movies/edit-movie/:id', moviesController.postEditMovie);

        this.post('#/movies/delete-movie/:id', moviesController.deleteMovie);
        this.get('#/movies/delete-movie/:id', moviesController.getDeleteMovie)



    }).run('#/home');
}