const eventsController = function () {
    const all = function (context) {
        helper.addHeaderInfo(context);

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
                this.partial('./views/events/all.hbs');
            })
        })
       
    }

    const getCreateEvent = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
            'single-event': './views/events/single-event.hbs'
        }).then(function () {
            this.partial('./views/events/create-event.hbs');
        })
       
    }

    const postCreateEvent = function (context) {
        const payload = {
            name: context.params.name,
            date: context.params.dateTime,
            description: context.params.description,
            imageUrl: context.params.imageUrl,
            creator: sessionStorage.getItem('username')
        };

        requester.post('events', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/events/all.hbs');
            })
    }

    const getEventDetails = function (context) {
        helper.addHeaderInfo(context);
        const eventId = context.params.id;

        requester.get(`events/${eventId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((eventById) => {
                context.event = eventById;

                context.loadPartials({
                    header: "./views/common/header.hbs",
                    footer: "./views/common/footer.hbs"
                }).then(function () {
                   this.partial('./views/events/details.hbs')
                })
            })
        
    }

    const getEventEdit = function (context) {
        const eventId = context.params.id;

        helper.addHeaderInfo(context);
        requester.get(`events/${eventId}`, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((event) => {
                context.event = event;
                helper.loadPartials(context)
                    .then(function () {
                        this.partial('./views/events/edit-event.hbs');
                });
            })  
    }

    const postEventEdit = function (context) {
        const payload = {
            eventId: context.params.id,
            name: context.params.name,
            dateTime: context.params.dateTime,
            description: context.params.description,
            imageUrl: context.params.imageUrl,
            creator: sessionStorage.getItem('userId')
        };

        requester.put(`events/${payload.eventId}`, 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/events/all`);
            })

    }

    const deleteEvent = function (context) {
        const eventId = context.params.id;
        helper.addHeaderInfo(context);

        requester.del(`events/${eventId}`, 'appdata', 'Kinvey', eventId)
            .then(helper.handler)
            .then(() => {
                context.redirect(`#/events/all`);
            })
    }

    return {
        all,
        getCreateEvent,
        postCreateEvent,
        getEventDetails,
        getEventEdit,
        postEventEdit,
        deleteEvent
       
    }

}();    