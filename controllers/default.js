const path = require("path");
const utils = require("../appModules/http-utils");

async function defaultRouteController(res, url) {
  const extname = String(path.extname(url)).toLowerCase();
  
  if (extname in utils.mimeTypes) {
    utils.staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};

module.exports = defaultRouteController;