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

        //Receipts
        this.get('#/recipes/all', recipesController.all);
        this.get('#/recipes/create', recipesController.getCreateRecipe);
        this.post('#/recipes/create', recipesController.postCreateRecipe);
        this.get('#/recipes/details/:id', recipesController.getRecipeDetails);
        this.get('#/recipes/edit/:id', recipesController.getRecipeEdit);
        this.post('#/recipes/edit/:id', recipesController.postRecipeEdit);
        this.get('#/recipes/delete/:id', recipesController.deleteRecipe);
        this.get('#/recipes/like/:id', recipesController.likeRecipe);
        this.post('#/recipes/like/:id', recipesController.likeRecipe);


    }).run('#/home');
}