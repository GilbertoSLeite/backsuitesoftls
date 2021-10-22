const ErrorHandler = (err, request, response, next) => {
  response.locals.message = err.message;
  response.locals.error =
    request.app.get("env") === "development" ? err : next(err);
  // render the error page
  response.status(err.status || 500);
};

module.exports = (app) => app.use(ErrorHandler);
