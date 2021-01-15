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
// string[i] = "value"


function maxBaloons(string,word){
    let letterDict = {};
    let wordDict={}
    let output=0
    console.log(string)
    for(let i=0;i<string.length;i++){
      console.log(string[i])
      if(string[i] in letterDict){
        letterDict[string[i]] +=1;
      }
      else{
      letterDict[string[i]] = 1;
      }
    }
    for(let j=0;j<word.length;j++){
      console.log(word[j])
      if(word[j] in letterDict){
        letterDict[word[j]] -=1;
      }

    }
    return [wordDict, letterDict];

  }
  console.log(maxBaloons("nlaebolko","balloon"));