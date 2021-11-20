const Sequelize = require("sequelize");
const dbConfigure = require("./databaseConfigure");

module.exports = new Sequelize(
  dbConfigure.DB,
  dbConfigure.USER,
  dbConfigure.PASSWORD,
  {
    host: dbConfigure.HOST,
    dialect: dbConfigure.dialect,
    operatorsAliases: 0,
    pool: {
      max: dbConfigure.pool.max,
      min: dbConfigure.pool.min,
      acquire: dbConfigure.pool.acquire,
      idle: dbConfigure.pool.idle,
    },
  }
);
