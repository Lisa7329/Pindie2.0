const api = require('../appModules/api');
const utils = require('../appModules/http-utils');
const rating = require('../appModules/rating');

async function mainRouteController(res, publicUrl, extname) {
  const data = await api.getData(api.endpoins.games);
  console.log(data);

  await rating.makeRatingFile(rating.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  utils.staticFile(res, publicUrl, extname);
};

module.exports = mainRouteController;