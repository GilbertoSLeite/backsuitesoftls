const Sequelize = require("sequelize");

const ToConnect = require("../config/connectingDatabase");

const sequelize = ToConnect;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuarios_ls = require("./schema/usuarios_ls")(sequelize, Sequelize);

module.exports = db;
