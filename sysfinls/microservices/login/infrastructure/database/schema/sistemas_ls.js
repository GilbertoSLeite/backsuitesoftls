module.exports = (sequelize, DataTypes) => {
  const Systems = sequelize.define(
    "sistemas_ls",
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
      nome_sistema: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment:
          "Coluna com o Nome do Sistema Desenvolvido pela LS Consultoria & Sistemas LTDA.",
      },
      hash_sistemas_ls: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Secret Information.",
      },
      situacao_usuario: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Status do Cadastro Sistema.",
      },
    },
    {
      comment:
        "Tabela de Cadastro dos Sistemas Desenvolvidos pela LS Consultoria e Sistemas LTDA.",
    }
  );
  return Systems;
};
