module.exports = ( sequelize, DataTypes ) => {
  const Image = sequelize.define("cadastros_imagens", {
    name: DataTypes.STRING,
  });
  const DataImage = sequelize.define("dados_imagens", {
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
    dados_sobre_imagem:{
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar as informações da imagem no sistema."
    },
    hash_dados_imagem_ms: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: "Secret Information.",
    },
    situacao_dados_imagem: {
      type: DataTypes.BOOLEAN,
      unique: false,
      allowNull: false,
      comment: "Coluna com o Status da Exibição dos Dados da Imagem no Sistema.",
    },
  })
  return DataImage;
}