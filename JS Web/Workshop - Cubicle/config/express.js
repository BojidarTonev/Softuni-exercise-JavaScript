const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const secret = 'shhh'

module.exports = (app) => {
    app.set('view engine', 'hbs');
    app.engine('hbs', hbs({
        extname: 'hbs'
    }));
    app.set('views', path.join(__dirname, '../views'));

    app.use(bodyParser.urlencoded( {extended: false} ));
    app.use(bodyParser.json());
    app.use(cookieParser(secret));

    app.use(express.static('static'));
};