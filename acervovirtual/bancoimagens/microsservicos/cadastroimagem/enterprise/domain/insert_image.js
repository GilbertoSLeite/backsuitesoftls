const { cadastros_imagens }  = require('../../drivers/infrastructure/database');

const InsertImage = async ( request, response ) => {
  try {
    const CreateImage = await cadastros_imagens.create({
      id: request.body.id,
      nome_imagem: request.body.nome_imagem,
      titulo_imagem: request.body.titulo_imagem,
      path_imagem: request.body.path_imagem,
      hash_imagem_ms: request.body.hash_imagem_ms,
      situacao_imagem: request.body.situacao_imagem,
    })
    response.status(200).send({
      status: true,
      fullData: CreateImage,
      idImage: CreateImage.id,
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error ao Inserir Imagem ", error);
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
  InsertImage
};