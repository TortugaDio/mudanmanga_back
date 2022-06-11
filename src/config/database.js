module.exports = {
  "development": {
    "username": "3tn4wv95137l",
    "password": "pscale_pw_H5BZ4lHutZ2tpOkfWNj70Hbol60JfUm8NzZ4GzE4lDs",
    "database": "mudanbd",
    "host": "sy80kbkv14kk.us-east-2.psdb.cloud",
    "dialect": "mysql",
    "port": 3306,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      }
    }
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
