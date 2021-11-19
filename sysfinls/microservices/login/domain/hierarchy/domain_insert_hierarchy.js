const { hierarquias_ls } = require("../../infrastructure/database");

const InsertHierarChy = async ( request, response ) => {
  try {
    const CreateHierarchy = await hierarquias_ls.create({
      id: request.body.id,
      tipo_hierarquia: request.body.tipo_hierarquia,
      usuarios_ls_id: request.body.usuarios_ls_id,
      hash_hierarquias_ls: request.body.hash_hierarquias_ls, 
      situacao_hierarquia: request.body.situacao_hierarquia,
    });
    response.status(200).send({
      status: true, 
      fullData: CreateHierarchy, 
      idHierarchy: CreateHierarchy.id,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error Durante Inserção da Hierarquia ", error);
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
  InsertHierarChy,
};
