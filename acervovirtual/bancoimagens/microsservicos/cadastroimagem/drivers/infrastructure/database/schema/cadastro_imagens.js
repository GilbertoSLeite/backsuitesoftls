module.exports = ( sequelize, DataTypes ) => {
  const Image = sequelize.define("cadastros_imagens", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      comment:
        "Coluna com geração automática dos identificadores, a fim de gerar segurança a estrutura de geração de códigos.",
    },
    nome_imagem:{
      type: DataTypes.STRING(85),
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar o nome da imagem no sistema."
    },
    nome_arquivo:{
      type: DataTypes.STRING(85),
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar o nome do arquivo imagem baixado no sistema."
    },
    titulo_imagem:{
      type: DataTypes.STRING(85),
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar o titulo exibido da imagem no sistema."
    },
    path_imagem:{
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      comment: "Coluna destinado a registrar o caminho da pasta da imagem salva no sistema."
    },
    hash_imagem_ms: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: "Secret Information.",
    },
    situacao_imagem: {
      type: DataTypes.BOOLEAN,
      unique: false,
      allowNull: false,
      comment: "Coluna com o Status da Imagem no Sistema.",
    },
  },{
    comment: "Tabela para Cadastro das Imagens."
  })
  return Image;
};
