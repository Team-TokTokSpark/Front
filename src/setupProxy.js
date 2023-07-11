const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://43.201.220.80:8080",
      changeOrigin: true,
    })
  );
};
