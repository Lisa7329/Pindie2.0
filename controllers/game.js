const fs = require("fs").promises;
const { getRandomElement } = require("../appModules/api");

async function gameRouteController(res) {
    try {
      const ratingFile = await fs.readFile(rating.PATH_TO_RATING_FILE);
      const data = JSON.parse(ratingFile);
      const game = getRandomElement(data);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(game));
    } catch (error) {
      res.statusCode = 500;
      res.end("Internal Server Error");
  };
};

module.exports = gameRouteController;