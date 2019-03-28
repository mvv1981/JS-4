/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  return tweet.split(' ').filter(el => {
    return el && el[0] == '#';
  }).map(el => el.slice(1));
};
