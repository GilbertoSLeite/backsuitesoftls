const router = require("express").Router();

const ImageControllers = require('../../interface/controllers/controllers_image');

module.exports = (app) => {
  router.post('/', ImageControllers.insertDataImage);

  app.use("/acervo/bancoimagem/dados_imagens", router);
}