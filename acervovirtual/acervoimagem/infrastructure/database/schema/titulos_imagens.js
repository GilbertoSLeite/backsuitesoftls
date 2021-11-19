module.exports = (sequelize, DataTypes) => {
  const Imagens = sequelize.define("cadastros_imagens", {
    name: DataTypes.STRING,
  });
  const ImageTitle = sequelize.define(
    "titulos_imagens",
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
      titulo_imagem: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna destinada para cadastro do Título da Imagem.",
      },
      responsavel_imagem: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Coluna destinada para cadastro do Responsável pelos dados da Imagem.",
      },
      cadastros_imagens_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Imagens,
          key: "id",
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE,
        },
        allowNull: false,
        unique: true,
        comment: "A vinculação com a tabela de Cadastro das Imagens.",
      },
      hash_titulos_imagens: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Secret Information.",
      },
    },
    {
      comment:
        "Tabela de Cadastro dos Sistemas Desenvolvidos pela LS Consultoria e Sistemas LTDA.",
    }
  );
  return ImageTitle;
};
