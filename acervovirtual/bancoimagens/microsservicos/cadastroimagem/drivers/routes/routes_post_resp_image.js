const router = require("express").Router();

const ImageControllers = require('../../interface/controllers/controllers_image');

module.exports = (app) => {
  router.post('/', ImageControllers.insertRespImage);

  app.use("/acervo/bancoimagem/responsavel", router);
}