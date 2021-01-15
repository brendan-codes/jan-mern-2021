/* *1189. Maximum Number of Balloons
 * Given a string text, you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */

//balons
//112211


function maxNumOfBalloons(text) {
    // declare variable for answer
    let answer = 0;

    // create a dictionary/object to collect the no. of letters
    let collection = {};

    // loop through string to add letters into dict
    for (var i = 0; i<text.length; i++) {


        if (!collection[text[i]]) {
            collection[text[i]] = 1;
        } else if (collection[text[i]] >= 1) {
            collection[text[i]]++;
        }
    }

    console.log(collection)

    if (collection.l >=2 && collection.o >=2) {
        while (collection.b !== 0 && collection.a !==0 && collection.l >=2 && collection.o >=2 && collection.n !== 0) {
            collection.b--;
            collection.a--;
            collection.l -= 2;
            collection.o -= 2;
            collection.n--;
            answer++;
        }
    }

    return answer;
}