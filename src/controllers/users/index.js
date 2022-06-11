const Boom = require('@hapi/boom')

const { user } = require('../../models');
const { successResponse } = require('../../utils/response')
const { validPassword } = require('../../services/general');

async function create(req, res , next) {

    const {
        body: {
            firstName,
            middleName,
            lastName,
            email,
            password,
            nickname,
            roles
        }
    } = req

    try {

        const existEmail = await user.findOne({ where: { email }});

        if(existEmail) throw Boom.badRequest('Email already exist');
        
        const existNickname = await user.findOne({ where: { nickname }});

        if(existNickname) throw Boom.badRequest('Nickname already exist');

        const validPassword_ = validPassword(password); //this validation review the format of the password

        if(!validPassword_) throw Boom.badRequest('Password must be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter and one symbol');
        
        
        // TODO: Asobre todo esto, hay que hacer una validacion de roles, porque si no se pone ningun rol,
        //      no se puede crear el usuario
        
        
        const userCreated = await user.create({
            firstName,
            middleName,
            lastName,
            email,
            password,
            nickname
        });
        
        if(!userCreated) throw Boom.badRequest('User not created by internal error');
        
        return successResponse(res , {
            message: 'User created successfully',
            user:{
                firstName:userCreated.firstName,
                middleName:userCreated.middleName,
                lastName:userCreated.lastName,
                email : userCreated.email,
                nickname:userCreated.nickname,
                createdAt:userCreated.createdAt,
            }
        })
        
    } catch (error) {
        next(error);
    }

}

async function update(req, res, next) {
    try {

        return successResponse(res , {
            message: 'User updated successfully',
        });
        
    } catch (error) {
        next(error);
    }
}

async function get(req , res , next ,){

    try {
        const users = await user.findAll();
        return successResponse(res , {
            users
        });
    } catch (error) {
        next(error);
    }

}

module.exports = {
    get,
    create,
    update
}