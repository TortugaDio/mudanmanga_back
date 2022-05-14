const Boom = require('@hapi/boom');
const { successResponse} = require('../../utils/response');

const cloudinary = require('cloudinary');
cloudinary.config(process.env.CLOUDINARY_URL);

async function uploadFile(req, res , next) {

    try {
        
        const { tempFilePath  } = req.files.file
        
        const resp = await cloudinary.uploader.upload(tempFilePath )
        // cloudinary.uploader.destroy( public_id ) // eliminar
        return successResponse(res, {
            message: 'File uploaded successfully',
            resp
        })
        
    } catch (error) {
        next(error);
    }
}

module.exports = {
    uploadFile
}