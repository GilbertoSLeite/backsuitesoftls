const { dados_imagens }  = require('../../drivers/infrastructure/database');

const InsertDataImage = async ( request, response ) => {
  try {
    const CreateDataImage = await dados_imagens.create({
      id: request.body.id,
      cadastros_imagens_id: request.body.cadastros_imagens_id,
      dados_sobre_imagem: request.body.dados_sobre_imagem,
      hash_dados_imagem_ms: request.body.hash_dados_imagem_ms,
      situacao_dados_imagem: request.body.situacao_dados_imagem,
    })
    response.status(200).send({
      status: true,
      fullData: CreateDataImage,
      idDataImage: CreateDataImage.id,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error ao Inserir Dados da Imagem ", error);
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
  InsertDataImage
};