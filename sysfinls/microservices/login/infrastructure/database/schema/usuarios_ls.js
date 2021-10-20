module.exports = (sequelize, DataType) => {
  const Users = sequelize.define(
    "usuarios_ls",
    {
      id: {
        type: DataType.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        comment:
          "Coluna com geração automática dos identificadores, a fim de gerar segurança a estrutura de geração de códigos.",
      },
      nome_usuario: {
        type: DataType.STRING,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Nome do Usuário.",
      },
      cpf: {
        type: DataType.STRING(11),
        unique: true,
        allowNull: false,
        comment: "Coluna com o CPF do Usuário.",
      },
      nascimento: {
        type: DataType.STRING(8),
        unique: false,
        allowNull: true,
        comment: "Coluna com a Data do Nascimento do Usuário.",
      },
      email: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com o E-Mail do Usuário.",
      },
      login: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com o Login do Usuário.",
      },
      senha: {
        type: DataType.STRING,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Login do Usuário.",
      },
      administrador_ls: {
        type: DataType.BOOLEAN,
        unique: false,
        allowNull: false,
        comment: "Coluna definindo a hierarquia de ADM do Usuário.",
      },
      hash_usuarios_ls: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com o Nome em Inglês do País.",
      },
      situacao_usuario: {
        type: DataType.BOOLEAN,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Status do Usuário no Sistema.",
      },
    },
    {
      comment: "Tabela de Cadastro para Login no Sistema.",
    }
  );
  return Users;
};
