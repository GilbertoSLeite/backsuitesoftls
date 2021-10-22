module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("usuarios_ls", {
    name: DataTypes.STRING,
  });

  const Systems = sequelize.define("sistemas_ls", {
    name: DataTypes.STRING,
  });

  const Clients = sequelize.define("clientes_ls", {
    name: DataTypes.STRING,
  });

  const Hierarchy = sequelize.define("hierarquias_ls", {
    name: DataTypes.STRING,
  });

  const UsersSysHie = sequelize.define(
    "usuarios_sistemas_hieraquia",
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
      usuarios_ls_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Users,
          key: "id",
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE,
        },
        allowNull: false,
        unique: false,
        comment: "A vinculação com a tabela dos Usuários do Sistema.",
      },
      sistemas_ls_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Systems,
          key: "id",
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE,
        },
        allowNull: false,
        unique: false,
        comment:
          "A vinculação com a tabela de Sistemas da LS Consultoria & Sistema LTDA.",
      },
      hierarquia_ls_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Hierarchy,
          key: "id",
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE,
        },
        allowNull: false,
        unique: false,
        comment:
          "A vinculação com a tabela de Hierarquias da LS Consultoria & Sistema LTDA.",
      },
      cliente_ls_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Clients,
          key: "id",
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE,
        },
        allowNull: false,
        unique: false,
        comment:
          "A vinculação com a tabela de Clientes da LS Consultoria & Sistema LTDA.",
      },
    },
    {
      comment:
        "Tabela de Cadastro dos Sistemas Desenvolvidos pela LS Consultoria e Sistemas LTDA.",
    }
  );
  return UsersSysHie;
};
