/**
 * Барабаш Максим Сергеевич
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var source = tweet.split(' ');
    for (var i = source.length-1; i >= 0; i--) {
        if ((source[i]).indexOf('#') === -1) {
            source.splice(i, 1);
        }
        else {
            source[i] = source[i].replace('#', '')
        }
    }
    return source;
};
