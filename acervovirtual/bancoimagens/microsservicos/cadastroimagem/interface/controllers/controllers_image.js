const { useCaseImage } = require("../../application/use_cases/useCaseImage");
const ErrorValidationImage = require("./validation/image/validation_image");

module.exports = {
  insertImage(request, response){
    console.log('Error Validando Imagem: ', ErrorValidationImage(request, response)) 
    ErrorValidationImage(request, response) //&& useCaseImage.RepoInsertImage(request, response);
  },
  insertRespImage(request, response){
    useCaseImage.RepoInsertRespImage(request, response);
  },
  insertDataImage(request, response){
    useCaseImage.RepoInsertDataImage(request, response);
  }
};
