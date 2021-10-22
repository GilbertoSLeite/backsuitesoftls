module.exports = (sequelize, DataTypes) => {
  const BrazilStates = sequelize.define(
    "brasil_estados",
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
      nome_estado: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna com o nome dos Estados do Brasil.",
      },
      hash_estados_ls: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Secret Information.",
      },
    },
    {
      comment: "Tabela de Cadastro dos Estados do Brasil.",
    }
  );
  return BrazilStates;
};
