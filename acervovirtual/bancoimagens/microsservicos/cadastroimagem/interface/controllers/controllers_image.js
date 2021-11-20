const { useCaseImage } = require("../../application/use_cases/useCaseImage")

module.exports = {
  insertImage(request, response){
    useCaseImage.RepoInsertImage(request, response);
  }
};
