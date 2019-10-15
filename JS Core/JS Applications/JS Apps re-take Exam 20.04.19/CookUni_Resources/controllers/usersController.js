const usersController = function () {

    const getRegister = function (context) {

        helper.addHeaderInfo(context)

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/auth/register.hbs');
        })
    }

    const postRegister = function (context) {

        const payload = {
            username: context.params.username,
            password: context.params.password,
            names: `${context.params.firstName} ${context.params.lastName}`
        };

        requester.post('', 'user', 'Basic', payload)
            .then(helper.handler)
            .then((data) => {
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('authtoken', data._kmd.authtoken);
                sessionStorage.setItem('userId', data._id);
                sessionStorage.setItem('names', data.names);

                context.redirect('#/home');
            })
    }

    const getLogin = function (context) {

        helper.addHeaderInfo(context)

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/auth/login.hbs');
        })
    }

    const postLogin = function (context) {

        const payload = {
            username: context.params.username,
            password: context.params.password
        };

        requester.post('login', 'user', 'Basic', payload)
            .then(helper.handler)
            .then((data) => {
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('authtoken', data._kmd.authtoken);
                sessionStorage.setItem('userId', data._id);
                sessionStorage.setItem('names', data.names)

                context.redirect('#/home');
            })

    }

    const logout = function (context) {
        requester.post('_logout', 'user', 'Kinvey')
            .then(helper.handler)
            .then(() => {
                sessionStorage.clear();

                context.redirect('#/home');
            });
    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout
    }

}();    