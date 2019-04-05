/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let arrayHashTags = [];
    
    if (tweet.indexOf('#') !== -1){
        let tempArray = tweet.split(" ");
        for (var i = 0; i < tempArray.length; i++) {
            let tweet = tempArray[i];
            if (tweet.indexOf('#') !== -1 && tweet.length > 1) {
                arrayHashTags.push(tweet.substring(1));
            }
        }
    } 
        return arrayHashTags;
};