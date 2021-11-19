const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const corsOptions = require("./bin/cors_options");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Analisar Cors do Navegador
app.use(cors(corsOptions));

// catch 404 and forward to error handler
require("./bin/error_status");

// error handler
require("./bin/error_handlers");

module.exports = app;
