require('moment/locale/es');

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const moment = require('moment-timezone');
const helmet = require('helmet');
const fileUpload = require('express-fileupload');
const path = require('path');

moment.locale('es');
moment.tz.setDefault(process.env.TZ);

const routes = require('./src/routes/index.routes');
const { wrapErrors, errorHandler } = require('./src/middlewares/errorHandling');

const i18n = require('./src/utils/locale');

const app = express();
    app.use(express.json());
    //app.use(i18n);
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));
    app.use(fileUpload({
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }));
    app.use(express.static(path.join(__dirname, 'public'))); // optional
    app.use('/api', routes);
    app.use(wrapErrors)
    app.use(errorHandler)

module.exports = app;