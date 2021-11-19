const { hierarquias_ls } = require("../../infrastructure/database");

const ListHierarchy = async (request, response ) => {
  try {
    const ListingHierarchy = await hierarquias_ls.findAll({
      order: [["id", "ASC"]],
    });
    response.status(200).send({
      status: true,
      fullData: ListingHierarchy,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error ao Gerar dados de Hierarquia ", error);
    response.status(404).send({
      status: false,
      errorDetail: error.parent,
      errorFull: error,
      errorCode: response.statusCode,
      errorMessage: response.statusMessage,
    });    
  }
};

const ListHierarchyByUser = async (request, response ) => {
  try {
    const ListingHierarchyByUser = await hierarquias_ls.findAll({
      where: {
        usuarios_ls_id: request.params.usuarios_ls_id,
      },
    });
    response.status(200).send({
      status: true,
      fullData: ListingHierarchyByUser,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error ao Gerar dados de Hierarquia por Usuário ", error);
    response.status(404).send({
      status: false,
      errorDetail: error.parent,
      errorFull: error,
      errorCode: response.statusCode,
      errorMessage: response.statusMessage,
    });    
  }
};

module.exports = {
  ListHierarchy,
  ListHierarchyByUser,
};
