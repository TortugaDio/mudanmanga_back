const { REGEX } = require('../constants/index')

function validPassword ( password ) {
    if(!password) return false;
    const regex = new RegExp(REGEX.PASSWORD);
    return regex.test(password);
}

function validEmail(mail) {
    if(!mail) return false;
    const regex = new RegExp(REGEX.EMAIL);
    return regex.test(mail);
}

module.exports = {
    validPassword,
    validEmail
}