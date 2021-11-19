const { hierarquias_ls } = require("../../infrastructure/database");

const UpdateHierarchyUsers = async (request, response ) => {
  try {
    const UpdatingHierarchyUsers = await hierarquias_ls.update({
      tipo_hierarquia: request.body.tipo_hierarquia,
      usuarios_ls_id: request.body.usuarios_ls_id,
      hash_hierarquias_ls: request.body.hash_hierarquias_ls, 
      situacao_hierarquia: request.body.situacao_hierarquia,
    },{
      where: {
        usuarios_ls_id: request.params.usuarios_ls_id,
      },
    });
    response.status(200).send({
      status: true,
      fullData: UpdatingHierarchyUsers,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error Durante Atualização da Hierarquia do Usuário ", error);
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
  UpdateHierarchyUsers,
};
