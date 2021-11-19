module.exports = (sequelize, DataTypes) => {
   const Imagens = sequelize.define(
    "cadastros_imagens",
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
      nome_imagem: {
        type: DataTypes.STRING(55),
        unique: true,
        allowNull: false,
        comment: "Coluna destinada para cadastro do Nome da Imagem.",
      },
      extensao_imagem: {
        type: DataTypes.STRING(4),
        unique: false,
        allowNull: false,
        comment: "Tipo de Extensão da Imagem.",
      },
      tipo_recuperacao: {
        type: DataTypes.ENUM({
          values: ["A", "Alta Resolução"],
          values: ["M", "Média Resolução"],
          values: ["B", "Baixa Resolução"],
        }),
        unique: false,
        allowNull: false,
        comment:
          "Coluna com o Tipo de Resolução da Recuperação da Imagem.",
      },
      hash_cadastro_imagem: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        comment: "Secret Information.",
      },
      exibir_imagem: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false,
        comment: "Coluna com o Status da Exibição da Imagem no Sistema.",
      },
    },
    {
      comment:
        "Tabela de Cadastro das Imagens do Acervo Municipal.",
    }
  );
  return Imagens;
};
