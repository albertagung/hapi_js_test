module.exports = {
  "development": {
    "username": process.env.PG_LOCAL_USERNAME,
    "password": process.env.PG_LOCAL_PASSWORD,
    "database": process.env.PG_LOCAL_DATABASE_NAME,
    "host": process.env.PG_LOCAL_HOST,
    "dialect": "postgres",
    "operatorsAliases": 0
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": 0
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": 0
  }
}
