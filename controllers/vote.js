const utils = require("../appModules/http-utils");
const { config, createRating, updateRating } = require("../appModules/rating");

async function voteRouteController(req, res) {
    if (req.method !== "POST") {
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      try {
        const body = await utils.parseBody(req)
        console.log(body);
        res.statusCode = 200;
        res.end("Success!");
      } catch (error) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    };
};

module.exports = voteRouteController;