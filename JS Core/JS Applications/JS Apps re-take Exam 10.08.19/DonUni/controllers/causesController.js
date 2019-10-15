const causesController = function () {

    const getAll = function (context) {

        helper.addHeaderInfo(context);

        const endpoint = `causes`;
        requester.get(endpoint, 'appdata', 'Kinvey')
        .then(helper.handler)
        .then((causes) => {
            context.causes = causes;
            context.loadPartials({
                header: "./views/common/header.hbs",
                footer: "./views/common/footer.hbs",
                'single-cause': './views/causes/single-cause.hbs'
            }).then(function () {
                this.partial('./views/causes/all.hbs');
            })
        })
    }

    const getCreate = function (context) {

        helper.addHeaderInfo(context)

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        }).then(function () {
            this.partial('./views/causes/create.hbs');
        })
    }

    const postCreate = function (context) {
        const payload = {
            cause: context.params.cause,
            pictureUrl: context.params.pictureUrl,
            neededFunds: context.params.neededFunds,
            description: context.params.description,
            collectedFunds: Number(0),
            creator: sessionStorage.getItem('username')
        };

        if(payload.cause == '' || payload.pictureUrl == '' || payload.neededFunds == '' || payload.description == ''){
            context.redirect('#/create');
        } else {
            requester.post('causes', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            })
        }

       
    }

    const getDetails = function (context) {
        helper.addHeaderInfo(context);
        const causeId = context.params.id;

        requester.get(`causes/${causeId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((causeById) => {
                context.cause = causeById;
                if(causeById.donors != undefined){
                    context.donors = causeById.donors.split(' ');
                }else {
                    context.donors = causeById.donors;
                }
                
                if(causeById.creator == sessionStorage.getItem('username')){
                    context.loadPartials({
                        header: "./views/common/header.hbs",
                        footer: "./views/common/footer.hbs",
                        'donor': './views/causes/donor.hbs'
                    }).then(function () {
                       this.partial('./views/causes/details-admin.hbs')
                    })
                } else {
                    context.loadPartials({
                        header: "./views/common/header.hbs",
                        footer: "./views/common/footer.hbs",
                        'donor': './views/causes/donor.hbs'
                    }).then(function () {
                       this.partial('./views/causes/details.hbs')
                    })
                }
                
            })
        
    }

    const deleteCause = function (context) {
        const causeId = context.params.id;
        helper.addHeaderInfo(context);

        requester.del(`causes/${causeId}`, 'appdata', 'Kinvey', causeId)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/all`);
            })
    }

    const donateCause = function (context) {
        helper.addHeaderInfo(context);
        const causeId = context.params.id;
        const donation = context.params.currentDonation;
        

        requester.get(`causes/${causeId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((causeById) => {
                const donations = Number(causeById.collectedFunds) + Number(donation);
                let donors = ``;
                if(causeById.donors == undefined){
                    donors = `${sessionStorage.getItem('username')}`;
                }else {
                    donors = causeById.donors + ` ${sessionStorage.getItem('username')}`;
                }
                
                let payload = {
                    causeId: context.params.id,
                    collectedFunds: donations,
                    description: causeById.description,
                    neededFunds: causeById.neededFunds,
                    pictureUrl: causeById.pictureUrl,
                    cause: causeById.cause,
                    donors: donors
                }

                requester.put(`causes/${payload.causeId}`, 'appdata', 'Kinvey', payload)
                    .then(helper.handler)
                    .then(() => {
                        context.redirect(`#/all`);
                    })
            })

    }

    return {
        getAll,
        getCreate,
        postCreate,
        getDetails,
        deleteCause,
        donateCause
    }

}();    