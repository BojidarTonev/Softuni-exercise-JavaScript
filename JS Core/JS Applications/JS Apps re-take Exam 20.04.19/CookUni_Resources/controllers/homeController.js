const homeController = function () {
    const getHome = function (context) {
        helper.addHeaderInfo(context);
        
        if (sessionStorage.getItem('username') != null) {
        requester.get('recipes', 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((recipes) => {
                context.recipes = recipes;
                context.user = sessionStorage.getItem('username');

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs",
                    'single-recipe': './views/recipes/single-recipe.hbs'
                }).then(function () {
                    if(context.recipes.length == 0){
                        this.partial('./views/home.hbs');
                    } else {
                        this.partial('./views/recipes/all.hbs')
                    }
                    
                })
            })
        } else {
            context.loadPartials({
                header: "./views/common/header.hbs",
                footer: "./views/common/footer.hbs"
            }).then(function () {
                this.partial('./views/home.hbs');
            })
        }
    }

    return {
        getHome
    }

}();    