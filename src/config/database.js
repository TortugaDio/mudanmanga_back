const { ...DB_CONFIG  } = require('../constants/index');

module.exports = {
  development : DB_CONFIG.development,
  test : DB_CONFIG.test,
  production : DB_CONFIG.production
}
