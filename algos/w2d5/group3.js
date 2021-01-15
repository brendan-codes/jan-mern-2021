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

const getInitialDict = (val) => {
  let dict = {};
  for (let i = 0; i < val.length; i++) {
    if (!dict[val[i]]) {
      dict[val[i]] = 0;
    }
  }
  console.log("helper func dict=", dict);
  return dict;
};

function NumofBallons(input, wordtofind = "balloon") {
  let dict = getInitialDict(wordtofind);
  for (let i = 0; i < input.length; i++) {
    if (dict.hasOwnProperty(input[i])) {
      dict[input[i]] += 1;
    }
  }
  let count = 0;

  while (true) {
    for (let i = 0; i < wordtofind.length; i++) {
      if (dict[wordtofind[i]] > 0) {
        dict[wordtofind[i]]--;
      } else {
        return count;
      }
    }
    count++;
  }
}

console.log(NumofBallons("balloonsabc", "cat"));


