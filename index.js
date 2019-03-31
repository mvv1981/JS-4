/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var arr = tweet.split(" ");
	var resArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i][0] == '#') {
			resArr.push(arr[i].slice(1));
		}		
	}
	return resArr;
};
