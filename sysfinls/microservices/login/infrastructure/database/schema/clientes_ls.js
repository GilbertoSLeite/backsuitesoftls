module.exports = (sequelize, DataTypes) => {
  const BrazilStates = sequelize.define("brasil_estados", {
    name: DataTypes.STRING,
  });
  const Clients = sequelize.define(
    "clientes_ls",
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
      estado_cliente_id: {
        type: DataTypes.BIGINT,
        references: {
          model: BrazilStates,
          key: "id",
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE,
        },
        allowNull: false,
        unique: false,
        comment: "A vinculação com a tabela dos Estados.",
      },
      codigo_ibge: {
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false,
        comment: "Código do IBGE do Município.",
      },
      cnpj_ibge: {
        type: DataTypes.STRING(14),
        unique: true,
        allowNull: false,
        comment: "CNPJ do Cliente(Município).",
      },
      nome_cliente: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Nome do Cliente(Município).",
      },
      hash_cliente_ls: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Secret Information.",
      },
    },
    {
      comment:
        "Tabela de Cadastro dos Clientes da LS Consultoria e Sistemas LTDA.",
    }
  );
  return Clients;
};
