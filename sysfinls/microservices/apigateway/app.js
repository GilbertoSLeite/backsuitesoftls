const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const corsOptions = require("./bin/cors_options");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { managerTarget } = require("./interfaces/routes/managerTarget");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Analisar Cors do Navegador
app.use(cors(corsOptions));

//Gerenciando as Pastas
app.use((req, rest, next) => {
  var pathProxy = req.path;
  next();
  //Gerando as Rotas
  app.use(
    pathProxy,
    createProxyMiddleware(pathProxy, {
      target: managerTarget[pathProxy],
      changeOrigin: true,
    })
  );
});

// catch 404 and forward to error handler
require("./bin/error_status");

// error handler
require("./bin/error_handlers");

module.exports = app;
