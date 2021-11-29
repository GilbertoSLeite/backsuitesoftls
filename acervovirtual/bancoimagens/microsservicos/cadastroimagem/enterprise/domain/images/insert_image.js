const { cadastros_imagens }  = require('../../../drivers/infrastructure/database');
const { CreateFolderImage } = require('../../../public/files/create_folder_image');
const { HashImageMs } = require('./create_hash_image_ms');
const { ImageExtesion } = require('./extension_image');
//const { DownloadImageFolder } = require('./download_image_folder');

const InsertImage = async ( request, response ) => {
  
  //Criando Pasta de Download das Imagens
  const pathImage = await CreateFolderImage();
  
  //Criando hash da imagem
  const hashImage = HashImageMs(request.body.nome_imagem, request.body.titulo_imagem);

  //Validar a Extensão da Imagem
  const extesion = ImageExtesion(request.body.nome_arquivo);

  //Efetuando Download da Imagem
  //DownloadImageFolder(request, response);

  try {
    if (!extesion) {
      const CreateImage = await cadastros_imagens.create({
        id: request.body.id,
        nome_imagem: request.body.nome_imagem,
        nome_arquivo: request.body.nome_arquivo,
        titulo_imagem: request.body.titulo_imagem,
        path_imagem: pathImage,
        hash_imagem_ms: hashImage,
        situacao_imagem: request.body.situacao_imagem,
      })
      response.status(200).send({
        status: true,
        fullData: CreateImage,
        idImage: CreateImage.id,
      });
    } else {
      response.status(405).send({
        status: false,
        errorDetail: "A extensão da imagem é inválida!"
      });
    }
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