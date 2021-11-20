const { responsavel_imagens }  = require('../../drivers/infrastructure/database');

const InsertRespImage = async ( request, response ) => {
  try {
    const CreateRespImage = await responsavel_imagens.create({
      id: request.body.id,
      cadastros_imagens_id: request.body.cadastros_imagens_id,
      nome_resp_imagem: request.body.nome_resp_imagem,
      hash_resp_imagem_ms: request.body.hash_resp_imagem_ms,
    })
    response.status(200).send({
      status: true,
      fullData: CreateRespImage,
      idImage: CreateRespImage.id,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error ao Inserir Responsável pela Imagem ", error);
    response.status(404).send({
      status: false,
      errorDetail: error.parent,
      errorFull: error,
      errorCode: response.statusCode,
      errorMessage: response.statusMessage,
    });    
  }
}

module.exports = {
  InsertRespImage
};