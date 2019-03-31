/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = tweet.split(" ");
    var hashTags = [];
    for(var i = 0; i < words.length; i++){
        if(words[i][0] == "#" && words[i].length > 1){
            hashTags.push(words[i].slice(1));
        }
    }
    return hashTags;
};
