const Boom = require('@hapi/boom');
const { EXTENSIONS_IMAGE } = require('../constants');

function validateFileImage(req, res, next) {

    if(!req.files || !req.files.file || Object.keys(req.files).length === 0) {
        throw Boom.badRequest('No file uploaded');
    }

    next();
}

function validateExtensionImage(req, res, next) {

    const { file } = req.files;

    const extension = file.mimetype.split('/')[1];

    if(!EXTENSIONS_IMAGE.includes(extension)) {
        throw Boom.badRequest('Invalid extension image');
    }

    next();
}

module.exports = { 
    validateFileImage,
    validateExtensionImage
}