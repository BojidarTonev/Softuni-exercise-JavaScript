const homeController = function () {
    const loggedIn = sessionStorage.getItem('userId') !== null;

    const getHome = function (context) {

        helper.addHeaderInfo(context)
        if (sessionStorage.getItem('userId') != null) {
            const endpoint = `events`;
            requester.get(endpoint, 'appdata', 'Kinvey')
                .then(helper.handler)
                .then((events) => {
                    context.events = events;
                    context.loadPartials({
                        header: "./views/common/header.hbs",
                        footer: "./views/common/footer.hbs",
                        'single-event': './views/events/single-event.hbs'
                    }).then(function () {
                        if(context.events.length == 0) {
                            this.partial('./views/home.hbs');
                        } else {
                            this.partial('./views/events/all.hbs')
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