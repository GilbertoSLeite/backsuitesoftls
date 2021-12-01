const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const corsOptions = require("./bin/cors_options");

const db = require("./drivers/infrastructure/database/index");
db.sequelize.sync();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Servindo as imagens para o Front-End
app.use(express.static('public'));

// Chamando as Rotas
require("./drivers/routes/routes_post_image")(app);
require("./drivers/routes/routes_post_resp_image")(app);
require("./drivers/routes/routes_post_data_image")(app);


// Analisar Cors do Navegador
app.use(cors(corsOptions));

// catch 404 and forward to error handler
require("./bin/error_status");

// error handler
require("./bin/error_handlers");

//Conenctando ao Serviço de Cache da Redis
//require('./bin/connect_redis');

module.exports = app;
