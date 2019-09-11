'use strict';
const express    = require('express');
const morgan     = require('morgan');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const logger     = require('./config/logger');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
   logger.info(`Connection to database successful`)
}).catch(error => {
    logger.error(`Connection the database has failed with: ${error.message}`)
});

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



module.exports = app;
