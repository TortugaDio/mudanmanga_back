/** Imports **/
const Boom = require('@hapi/boom')
const { successResponse } = require('../../utils/response')

const { user } = require('../../models');

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

        const existEmail = await user.findOne({
            where: {
                email
            }
        });

        return successResponse(res , {
            message: 'User created successfully',
            existEmail
        })
        

    } catch (error) {
        console.log('Error creating user' , error);
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

module.exports = {
    create,
    update
}