module.exports = ( sequelize, DataTypes ) => {
  const Image = sequelize.define("cadastros_imagens", {
    name: DataTypes.STRING,
  });
  const ResponsibleImage = sequelize.define("responsavel_imagens", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      comment:
        "Coluna com geração automática dos identificadores, a fim de gerar segurança a estrutura de geração de códigos.",
    },
    cadastros_imagens_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Image,
        key: "id",
        deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE,
      },
      allowNull: false,
      unique: false,
      comment: "A vinculação com a tabela de Cadastro das Imagens para uso do Sistema.",
    },
    nome_resp_imagem:{
      type: DataTypes.STRING(85),
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar o nome do responsável pela imagem no sistema."
    },
    hash_resp_imagem_ms: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: "Secret Information.",
    },
  })
  return ResponsibleImage;
}