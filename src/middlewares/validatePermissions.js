const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');

const { ROLES } = require('../constants');

function validateJwt(req , res , next) {

    const token = req.header(process.env.JWT_NAME_HEADER_TOKEN);

    if( !token ){
        throw Boom.unauthorized('Token not found');
    }

    try {
        
        const { uid , role } = jwt.verify(token , process.env.JWT_SECRET);
        req.user_id = uid;
        req.user_role = role;
        next();

    } catch (error) {
        next(error);    
    }
}

function isRoleAdmin(req , res , next) {

    const { user_role } = req;

    if( user_role !== ROLES.ADMIN ){
        throw Boom.unauthorized('You dont have permissions to access this resource');
    }

    next();
}

function isRoleEditor(req , res , next) {
    
    const { user_role } = req;

    if( user_role !== ROLES.EDITOR ){
        throw Boom.unauthorized('You dont have permissions to access this resource');
    }

    next();
}

function isRoleModerator(req , res , next) {
    
        const { user_role } = req;
    
        if( user_role !== ROLES.MODERATOR ){
            throw Boom.unauthorized('You dont have permissions to access this resource');
        }
    
        next();
}

function isRoleReader(req , res , next) {
    
    const { user_role } = req;

    if( user_role !== ROLES.READER ){
        throw Boom.unauthorized('You dont have permissions to access this resource');
    }

    next();
}

module.exports = {
    validateJwt,
    isRoleAdmin,
    isRoleEditor,
    isRoleModerator,
    isRoleReader
}