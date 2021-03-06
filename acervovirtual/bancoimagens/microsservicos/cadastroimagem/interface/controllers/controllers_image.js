const { useCaseImage } = require("../../application/use_cases/useCaseImage");
const ErrorValidationImage = require("./all_image_validations");

module.exports = {
  insertImage(request, response){
    !ErrorValidationImage(request, response) && useCaseImage.RepoInsertImage(request, response);
  },
  insertRespImage(request, response){
    useCaseImage.RepoInsertRespImage(request, response);
  },
  insertDataImage(request, response){
    useCaseImage.RepoInsertDataImage(request, response);
  }
};
