const Sequelize = require("sequelize");

const ToConnect = require("../config/connectingDatabase");

const sequelize = ToConnect;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cadastros_imagens = require("./schema/cadastro_imagens")(sequelize, Sequelize);
db.responsavel_imagens = require("./schema/responsavel_imagens")(sequelize, Sequelize);
db.dados_imagens = require("./schema/dados_imagens")(sequelize, Sequelize);

module.exports = db;
