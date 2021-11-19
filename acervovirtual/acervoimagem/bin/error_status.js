const createError = require("http-errors");

const ErroStatus = (request, response, next) => {
  const statusError =
    request.statusCode >= 400 &&
    request.statusCode <= 511 &&
    next(createError(response.statusCode));
  return statusError;
};

module.exports = (app) => app.use(ErroStatus);
