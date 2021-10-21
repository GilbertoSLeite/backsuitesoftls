const router = require("express").Router();

module.exports = (app) => {
  router.get("/", (req, res) => {
    res.send({
      message: "API Gateway da LS Consultoria & Sistemas LTDA",
    });
  });

  app.use("/", router);
};
