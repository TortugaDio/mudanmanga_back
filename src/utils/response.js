const { Response } = require( 'express');

function successResponse(res = Response, data = {} ) {
    return res.status(200).json({
        success: true,
        data,
    });
}

function errorResponse(res, error = null, status = 400) {
    return res.status(status).json({ success: false, error });
}

function download(res, headers = {}, contentFile, status = 200, send = true) {
    if (send) {
        return res.status(status).set(headers).send(contentFile);
    } else {
        res.set(headers);
        contentFile.write(res).then(() => {
            res.status(200).end();
        });
        return res;
    }
}

module.exports = {
    successResponse,
    download,
    errorResponse
}