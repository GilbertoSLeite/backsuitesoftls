//const { ComparePassword } = require("../../../application/security/password/comparePassword");
const { HooksBeforeBulkUpdate } = require("../../../application/security/password/hooksBeforeBulkUpdate");
const { HooksBeforeCreate } = require("../../../application/security/password/hooksBeforeCreate");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "usuarios_ls",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        comment:
          "Coluna com geração automática dos identificadores, a fim de gerar segurança a estrutura de geração de códigos.",
      },
      nome_usuario: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Nome do Usuário.",
      },
      cpf: {
        type: DataTypes.STRING(11),
        unique: true,
        allowNull: false,
        comment: "Coluna com o CPF do Usuário.",
      },
      nascimento: {
        type: DataTypes.STRING(8),
        unique: false,
        allowNull: true,
        comment: "Coluna com a Data do Nascimento do Usuário.",
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com o E-Mail do Usuário.",
      },
      login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com o Login do Usuário.",
      },
      senha: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        comment: "Coluna com a Senha Criptograda do Usuário.",
      },
      administrador_ls: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false,
        comment: "Coluna definindo a hierarquia de ADM do Usuário.",
      },
      hash_usuarios_ls: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Secret Information.",
      },
      situacao_usuario: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Status do Usuário no Sistema.",
      },
    },{
      hooks:{
        beforeCreate: (usuarios_ls, options) => HooksBeforeCreate(usuarios_ls, options),
        beforeBulkUpdate: (usuarios_ls, options) => HooksBeforeBulkUpdate(usuarios_ls, options),
      },
    },
    {
      comment: "Tabela de Cadastro para Login no Sistema.",
    }
  );

 //Users.prototype.comparePassword = ComparePassword(passw, cb);

  return Users;
};
