const { v2:cloudinary } = require('cloudinary');
cloudinary.config(process.env.CLOUDINARY_URL);

function uploadImage ( file ) {
    return new Promise( (resolve, reject) => {
        try {
            const resp = cloudinary.uploader.upload(file , 
                {
                    transformation: [
                        { dpr: "auto", responsive: true, width: "auto", crop: "scale" }, 
                        { background: "none" },
                        {fetch_format: "auto"},
                        {gravity: "auto"},
                        {quality: "auto"}
                    ]
                });
            resolve(resp);
        } catch (error) {
            reject(`Error uploading file ${file}`);
        }
    })
}

function deleteImage( public_id ) {
    return new Promise( (resolve, reject) => {
        try {
            const resp =    cloudinary.uploader.destroy( public_id ) // eliminar
            resolve(resp);
        } catch (error) {
            resolve(resp);
            reject(`Error deleting file with public_id ${public_id}`);
        }
    })
}

function getDetails( public_id){
    return new Promise( ( resolve , reject) => {
        try {
            const resp =  cloudinary.api.resource(public_id, function(error, result) {console.log(result, error)});
            resolve(resp);
        } catch (error) {
            reject(`Error getting details for file with public_id ${public_id}`);
        }
    })
}
module.exports = {
    uploadImage,
    deleteImage,
    getDetails
}