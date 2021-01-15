/* *1189. Maximum Number of Balloons
 * Given a string text you want to use the characters of
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
// O(n)
const Balloons = (text, word = "balloon") => {
    if (text.length < word.length) { return 0; } // if the word we want is larger than text, give up
    let count = Infinity; // assume we have Infinity possible instances
    let wordDict = {}; // dicts for words and text
    let textDict = {};

    // build a dictionary out of the letters we want
    for (let letter of word) {

        if(wordDict.hasOwnProperty(letter)){
            wordDict[letter]++;
        }else{
            wordDict[letter] = 1;
        }
        // wordDict.hasOwnProperty(letter) ?
        //     wordDict[letter]++
        // :
        //     wordDict[letter] = 1;
    }

    // build a dictionary out of the letters we have
    for (let letter of text) {
        textDict.hasOwnProperty(letter) ? textDict[letter]++ : textDict[letter] = 1;
    }

    // log the dicts for posterity
    console.log('text', textDict);
    console.log('words', wordDict);


    // loop over the letters we want
    for (let key of Object.keys(wordDict)) {
        // "b"
        let newAmount = Math.floor(textDict[key] / wordDict[key]);
        // find out how many words we can make with just that letter
        if (count > newAmount) {
            count = newAmount; // lower count
        }
    }
    return count;
};


console.log(Balloons("loonbalxbaoaeuhfipyahnnnnnnpiyefhpa8ywh9dhaps9fgyllllll8aoysgyfabwhuygdo8cabsicbausoygdo8agsf8ygasyidgaousdg8yasgdpgahspydgauysgdauoysllpoon", "balloon"));