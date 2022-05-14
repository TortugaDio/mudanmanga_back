const Boom = require('@hapi/boom');

function validateFileImage(req, res, next) {

    if(!req.files || !req.files.file || Object.keys(req.files).length === 0) {
        throw Boom.badRequest('No file uploaded');
    }

    next();
}

module.exports = { 
    validateFileImage
}