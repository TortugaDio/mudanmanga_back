const jwt = require('jsonwebtoken');

function generarJwt( uid , role ){

    return new Promise( (resolve, reject) => {
        
        const payload = {
            uid: uid,
            role: role
        };

        jwt.sign( payload , process.env.JWT_SECRET , {
            expiresIn: process.env.JWT_EXPIRATION_IN
        }, (err, token) => {
            if( err ){
                reject('Error generatig token');
            }else{
                resolve(token);
            }
        });

    });

}




module.exports = {
    generarJwt
}