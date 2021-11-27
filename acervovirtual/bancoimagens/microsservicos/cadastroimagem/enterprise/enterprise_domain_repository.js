const { InsertDataImage } = require("./domain/data_images/insert_data_image");
const { InsertImage } = require("./domain/images/insert_image");
const { InsertRespImage } = require("./domain/responsible_image/insert_resp_image");

const RepoInsertImage = ( request, response ) => InsertImage( request, response );
const RepoInsertRespImage = ( request, response ) => InsertRespImage( request, response );
const RepoInsertDataImage = ( request, response ) => InsertDataImage( request, response );

module.exports = {
  RepoInsertImage,
  RepoInsertRespImage, 
  RepoInsertDataImage,
}