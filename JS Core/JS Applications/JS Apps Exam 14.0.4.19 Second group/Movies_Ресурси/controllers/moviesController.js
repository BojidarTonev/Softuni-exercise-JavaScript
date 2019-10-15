const moviesController = function () {
    const getAddMovies = function (context) {

        helper.addHeaderInfo(context)

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/movies/add-movie.hbs');
        })
    }

    const postAddMovies = function (context) {
        const payload = {
            title: context.params.title,
            imageUrl: context.params.imageUrl,
            description: context.params.description,
            genres: context.params.genres,
            tickets:Number(context.params.tickets) 
        };

        requester.post('movies', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            })
    }

    const loadCinema = function (context) {
        helper.addHeaderInfo(context);
        const sortCriteria = JSON.stringify({
            'tickets': -1
        });
        const endpoint = `movies?query={}&sort=${sortCriteria}`;
        requester.get(endpoint, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((movies) => {
                context.movies = movies;

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs",
                    'cinema-movie': './views/movies/cinema-movie.hbs'
                }).then(function () {
                    this.partial('./views/movies/cinema.hbs');
                })
            })
    }

    const getMyMovies = function (context) {
        const endpoint = `movies?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`
        helper.addHeaderInfo(context);

        requester.get(endpoint, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((movies) => {
                context.movies = movies;

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs",
                    'single-movie': './views/movies/single-movie.hbs'
                }).then(function () {
                    this.partial('../views/movies/my-movies.hbs');
                })
            })
    }

    const getEditMovie = function (context) {
        const movieId = context.params.id;

        helper.addHeaderInfo(context);
        requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((movie) => {
                context.movie = movie;
                helper.loadPartials(context)
                    .then(function () {
                        this.partial('./views/movies/edit-movie.hbs');
                });
            })
    }

    const postEditMovie = function (context) {
        const payload = {
            movieId: context.params.id,
            title: context.params.title,
            imageUrl: context.params.imageUrl,
            description: context.params.description,
            genres: context.params.genres,
            tickets: Number(context.params.tickets),
            
        };

        requester.put(`movies/${payload.movieId}`, 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/my-movies`);
            })

    }
    
    const getDeleteMovie = function (context) {
        const movieId = context.params.id;

        helper.addHeaderInfo(context);
        requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((movie) => {
                context.movie = movie;
                helper.loadPartials(context)
                    .then(function () {
                        this.partial('./views/movies/delete-movie.hbs');
                });
            })
    }


    const deleteMovie = function (context) {
        const movieId = context.params.id;
        helper.addHeaderInfo(context);

        requester.del(`movies/${movieId}`, 'appdata', 'Kinvey', movieId)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/my-movies`);
            })
    }

    

    return {
        getAddMovies,
        postAddMovies,
        loadCinema,
        getMyMovies,
        getEditMovie,
        postEditMovie,
        getDeleteMovie,
        deleteMovie
    }
}();