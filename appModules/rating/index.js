const makeRatingFile = require("./rating-file");
const PATH_TO_RATING_FILE = require('./config');
const createRating = require('./calculations');
const updateRating = require('./calculations');
const WEIGHT = require('./config');

module.exports = {
    makeRatingFile,
    PATH_TO_RATING_FILE,
    createRating,
    updateRating,
    WEIGHT
};