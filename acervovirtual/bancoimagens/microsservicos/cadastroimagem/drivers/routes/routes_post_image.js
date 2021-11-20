const router = require("express").Router();

const ImageControllers = require('../../interface/controllers/controllers_image');

module.exports = (app) => {
  router.post('/', ImageControllers.insertImage);

  app.use("/acervo/bancoimagem/cadastrar", router);
}