const { createProxyMiddleware } = require("http-proxy-middleware");

const managerTarget = {
  "": "http://localhost:6002/",
  undefined: "http://localhost:6002/",
  "/": "http://localhost:6002/",
  "/login": "http://localhost:6003/login",
};

const express = require("express");
const app = express();

const MicroservicesManager = (path) => {
  console.log("path ", path);
  const apiProxy = createProxyMiddleware(path, {
    target: managerTarget[path],
    changeOrigin: true,
  });

  app.use(path, apiProxy);
};

module.exports = {
  MicroservicesManager,
};
