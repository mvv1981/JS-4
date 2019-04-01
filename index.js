/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
       
    var tags = tweet.match(/#[\wа-яё0-9]+/gi);
    var result = [];
    if (tags === null) {
        return result;
    }
    else {
    for(var i=0; i < tags.length; i++) {
        result.push(tags[i].slice(1));
    }
    }
    return result;
};
