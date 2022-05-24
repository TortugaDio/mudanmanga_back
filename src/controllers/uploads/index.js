const Boom = require('@hapi/boom');
const { successResponse} = require('../../utils/response');
const { uploadImage, deleteImage , getDetails } = require('../../helpers/cloudinary');

async function upload(req, res , next) {

    try {
        
        const { tempFilePath  } = req.files.file
        const { public_id  , format , secure_url, ...resp} = await uploadImage(tempFilePath )

        // TODO: Save to database 

        return successResponse(res, {
            message: 'File uploaded successfully',
            resp
        })
        
    } catch (error) {
        next(error);
    }
}

// TODO: Delete image from cloudinary and database
async function destroy(req, res , next) {
    try {
        const { public_id } = req.params

        const resp = await getDetails( public_id ) 

        //TODO: Delete from database

        return successResponse(res, {
            message: 'File deleted successfully',
            resp
        })
        
    } catch (error) {
        next(error);
    }
}
module.exports = {
    upload,
    destroy
}