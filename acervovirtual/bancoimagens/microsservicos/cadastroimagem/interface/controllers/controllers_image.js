const { useCaseImage } = require("../../application/use_cases/useCaseImage")

module.exports = {
  insertImage(request, response){
    useCaseImage.RepoInsertImage(request, response);
  },
  insertRespImage(request, response){
    useCaseImage.RepoInsertRespImage(request, response);
  },
  insertDataImage(request, response){
    useCaseImage.RepoInsertDataImage(request, response);
  }
};
