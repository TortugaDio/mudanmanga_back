module.exports = {
  "development": {
    "username": "root",
    "password": "Password.01",
    "database": "mudanmanga_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 1306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": true,
      }
    }
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
