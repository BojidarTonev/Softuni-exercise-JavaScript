window.onload = () => {
    Sammy('#sammy-container', function() {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('#/home', homeController.getHome);
        
        //User
        this.get('#/register', userController.getRegister);
        this.get('#/login', userController.getLogin);

        this.post('#/register', userController.postRegister);
        this.post('#/login', userController.postLogin);
        this.get('#/logout', userController.logout);

        //Events
        this.get('#/events/create-event', eventsController.getCreateEvent);
        this.post('#/events/create-event', eventsController.postCreateEvent);
        this.get('#/events/all', eventsController.all);
        
        this.get('#/events/details/:id', eventsController.getEventDetails);   
        this.get('#/events/edit-event/:id', eventsController.getEventEdit);
        this.post('#/events/edit-event/:id', eventsController.postEventEdit);
        this.get('#/events/close-event/:id', eventsController.deleteEvent);


    }).run('#/home');
}