const { checkSchema } = require('express-validator');

const createUser = checkSchema({
    
    firstName: {
        in:['body'],
        isString: true,
        errorMessage:'The firstName is requerid'
    },

    middleName:{
        in:['body'],
        isString: true,
        errorMessage:'The middleName is requerid'
    },

    lastName:{
        in:['body'],
        isString: true,
        errorMessage:'The lastName is requerid'
    },

    email:{
        in:['body'],
        errorMessage:'The email is requerid'
    },

    email:{
        in:['body'],
        isEmail: true,
        errorMessage: 'The email is not valid'
    },

    password:{
        in:['body'],
        isString: true,
        errorMessage:'The password is requerid'
    },

    nickname:{
        in:['body'],
        isString: true,
        errorMessage:'The nickname is requerid'
    },

    profiles:{
        in:['body'],
        isArray: true,
        errorMessage:'The profiles is requerid'
    },
})

module.exports = {
    createUser
}