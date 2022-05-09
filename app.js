require('moment/locale/es');
require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const moment = require('moment-timezone');
const helmet = require('helmet');
const path = require('path');

const routes = require('./src/routes/index.routes');

moment.locale('es');
moment.tz.setDefault(process.env.TZ);

const app = express();
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public'))); // optional
    app.use('/api', routes);

module.exports = app;