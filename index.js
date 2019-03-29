/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var wordArray = tweet.split(" ");
    var resArray = [];
    wordArray.forEach(word => {
        if (word[0] == "#" && word.length > 1) {
            resArray.push(word.slice(1));
        }
    });
    return resArray;
};
