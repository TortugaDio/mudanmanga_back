/** Imports **/
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
            nickname
        }
    } = req

    try {

        const existEmail = await user.findOne({ where: { email }});

        if(existEmail) throw Boom.badRequest('Email already exist');
        
        const existNickname = await user.findOne({ where: { nickname }});

        if(existNickname) throw Boom.badRequest('Nickname already exist');

        const validPassword_ = validPassword(password); //this validation review the format of the password

        if(!validPassword_) throw Boom.badRequest('Password must be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter');
        
        const userCreated = await user.create({
            firstName,
            middleName,
            lastName,
            email,
            password,
            nickname
        });
        
        return successResponse(res , {
            message: 'User created successfully',
            user:{
                firstName:userCreated.firstName,
                middleName:userCreated.middleName,
                lastName:userCreated.lastName,
                email : userCreated.email,
                nickname:userCreated.nickname,
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