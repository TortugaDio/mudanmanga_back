const bcrypt = require('bcryptjs');

function normalizeString(rawText) {
  return rawText
    .trim()
    .normalize(`NFD`)
    .replace(/[\u0300-\u036f]/g, ``)
}

function encryptPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function decryptPassword(password, passwordDB) {
  let validPassword = bcrypt.compareSync(password, passwordDB);
  return validPassword;
}

  module.exports = {
    normalizeString,
    decryptPassword,
    encryptPassword
  }