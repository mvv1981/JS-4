/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let tempTweet = tweet;
    let arrayHashTag = [];
    
    if (tempTweet.indexOf('#') !== -1){
        let stringArray = tempTweet.split(" ");
        for (var i = 0; i < stringArray.length; i++) {
            var tweet = stringArray[i];
            if (tweet.indexOf('#') !== -1) {
                arrayHashTag.push(tweet.substring(1));
            }
        }
        return arrayHashTag;
    } 
    else {
        return arrayHashTag;
    }

};





//for(var str in stringArray)
//	console.log(stringArray[str]);


//Строка содержит только буквы русского и латинского алфавита, знак решетки и пробелы. 
//Гарантируется, что в функцию передается непустая строка. Слова в строке разделены одним пробелом. 
//Хештег начинается со знака решетки (#) и состоит из одного слова.
//В результирующем массиве хештеги должны быть без решетки. Если в слове хештегов нет, то возвращается пустой массив.