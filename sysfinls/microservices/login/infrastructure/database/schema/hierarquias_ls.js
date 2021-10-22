module.exports = (sequelize, DataTypes) => {
  const Hierarchy = sequelize.define(
    "hierarquias_ls",
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
      tipo_hierarquia: {
        type: DataTypes.ENUM({
          values: ["C", "Inserção"],
          values: ["R", "Leitura"],
          values: ["U", "Atualiza"],
        }),
        unique: true,
        allowNull: false,
        comment:
          "Coluna com o Tipo de Hierarquia para uso dos Sistemas da LS Consultoria & Sistemas LTDA.",
      },
      hash_hierarquias_ls: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Secret Information.",
      },
      situacao_hierarquia: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Status do Cadastro da Hierarquia.",
      },
    },
    {
      comment:
        "Tabela de Cadastro dos Sistemas Desenvolvidos pela LS Consultoria e Sistemas LTDA.",
    }
  );
  return Hierarchy;
};
