const Sequelize = require("sequelize");
const databaseConfigure = require("./databaseConfigure");

const MakingConnection = new Sequelize(
  databaseConfigure.DB,
  databaseConfigure.USER,
  databaseConfigure.PASSWORD,
  {
    host: databaseConfigure.HOST,
    dialect: databaseConfigure.dialect,
    operatorsAliases: 0,
    pool: {
      max: databaseConfigure.pool.max,
      min: databaseConfigure.pool.min,
      acquire: databaseConfigure.pool.acquire,
      idle: databaseConfigure.pool.idle,
    },
  }
);

module.exports = {
  MakingConnection,
};
