module.exports = {
  "development": {
    "username": "l0ox1vvjwbnn",
    "password": "pscale_pw_xQCKtZ49h2Vmx6k8jUlY134phgDCi4IoDd7TG87AYdA",
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
