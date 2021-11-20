const { InsertDataImage } = require("./domain/insert_data_image");
const { InsertImage } = require("./domain/insert_image");
const { InsertRespImage } = require("./domain/insert_resp_image");

const RepoInsertImage = ( request, response ) => InsertImage( request, response );
const RepoInsertRespImage = ( request, response ) => InsertRespImage( request, response );
const RepoInsertDataImage = ( request, response ) => InsertDataImage( request, response );

module.exports = {
  RepoInsertImage,
  RepoInsertRespImage, 
  RepoInsertDataImage,
}