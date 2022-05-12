const { response } = require('express');
const { validationResult } = require('express-validator');
const { errorResponse } = require('../utils/response')

function validarCampos(req, res = response, next) {

    const errores = validationResult(req);

    console.log("errores", errores);

    if (!errores.isEmpty()) {
        return errorResponse(res, errores.array(), 422);
    }

    next();

}

module.exports = {
    validarCampos
}