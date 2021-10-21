const { createProxyMiddleware } = require("http-proxy-middleware");
const apiProxy = createProxyMiddleware("/", {
  target: "http://localhost:6002/",
});

module.exports = (app) => {
  const manager = {
    "/": app.use("/", apiProxy),
  };

  manager[
    app.use((req, res, next) => {
      return req.path;
    })
  ];
};
