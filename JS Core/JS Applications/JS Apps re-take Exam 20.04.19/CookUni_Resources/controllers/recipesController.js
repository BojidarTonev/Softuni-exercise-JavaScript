const recipesController = function () {

    const all = function (context) {
        helper.addHeaderInfo(context);

        const endpoint = `recipes`;
        requester.get(endpoint, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((recipes) => {
                context.recipes = recipes;

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs",
                    'single-recipe': './views/recipes/single-recipe.hbs',
                }).then(function () {
                    if (context.recipes.length == 0) {
                        this.partial('./views/home.hbs');
                    } else {
                        this.partial('./views/recipes/all.hbs')
                    }
                })
            })

    }

    const getCreateRecipe = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
        }).then(function () {
            this.partial('./views/recipes/create.hbs');
        })

    }

    const postCreateRecipe = function (context) {
        helper.addHeaderInfo(context);
        const payload = {
            meal: context.params.meal,
            ingredients: context.params.ingredients,
            prepMethod: context.params.prepMethod,
            description: context.params.description,
            foodImageURL: context.params.foodImageURL,
            category: context.params.category,
            creator: sessionStorage.getItem('username'),
            likesCounter: 0
        };

        requester.post('recipes', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/recipes/all');
            })
    }

    const getRecipeDetails = function (context) {
        helper.addHeaderInfo(context);
        const recipeId = context.params.id;

        requester.get(`recipes/${recipeId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((recipeById) => {
                const recipeCreator = recipeById.creator;
                const ingredients = recipeById.ingredients.split(", ");
                context.recipe = recipeById;
                context.ingredients = ingredients;

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs",
                    'ingredient': './views/recipes/ingredient.hbs'
                }).then(function () {
                    if (recipeCreator == sessionStorage.getItem('username')) {
                        this.partial('./views/recipes/recipe-owner.hbs')
                    } else {
                        this.partial('./views/recipes/details.hbs')
                    }

                })
            })

    }

    const getRecipeEdit = function (context) {
        const recipeId = context.params.id;

        helper.addHeaderInfo(context);
        requester.get(`recipes/${recipeId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((recipe) => {
                context.recipe = recipe;
                helper.loadPartials(context)
                    .then(function () {
                        this.partial('./views/recipes/edit.hbs');
                    });
            })
    }

    const postRecipeEdit = function (context) {

        requester.get(`recipes/${context.params.id}`, 'appdata', 'Kinvey')
        .then(helper.handler)
        .then((recipeById) => {
            const payload = {
                recipeId: context.params.id,
                meal: context.params.meal,
                ingredients: context.params.ingredients,
                prepMethod: context.params.prepMethod,
                description: context.params.description,
                creator: recipeById.creator,
                foodImageURL: recipeById.foodImageURL,
                likesCounter: recipeById.likesCounter
            };


            requester.put(`recipes/${payload.recipeId}`, 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/recipes/all`);
            })
        })

        

    }

    const deleteRecipe = function (context) {
        const recipeId = context.params.id;
        helper.addHeaderInfo(context);

        requester.del(`recipes/${recipeId}`, 'appdata', 'Kinvey', recipeId)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/recipes/all`);
            })
    }

    const likeRecipe = function (context) {
        const recipeId = context.params.id;
        helper.addHeaderInfo(context);

        requester.get(`recipes/${recipeId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((recipeById) => {
                const likes = Number(recipeById.likesCounter) + 1;
                let payload = {
                    recipeId: context.params.id,
                    meal: recipeById.meal,
                    ingredients: recipeById.ingredients,
                    prepMethod: recipeById.prepMethod,
                    description: recipeById.description,
                    foodImageURL: recipeById.foodImageURL,
                    category: recipeById.category,
                    creator: recipeById.creator,
                    likesCounter: likes
                }

                requester.put(`recipes/${payload.recipeId}`, 'appdata', 'Kinvey', payload)
                    .then(helper.handler)
                    .then(() => {
                        context.redirect(`#/recipes/all`);
                    })
            })
    }


    return {
        all,
        getCreateRecipe,
        postCreateRecipe,
        getRecipeDetails,
        getRecipeEdit,
        postRecipeEdit,
        deleteRecipe,
        likeRecipe

    }

}();    