/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  // ab#c
  // ac


  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

function backspaceCompare(S, T) {
  let arrS = S.split("");
  let arrT = T.split("");
  let len = arrS.length
  if (len < arrT.length) {
      len = arrT.length;
  }
  let result1 = [];
  let result2 = [];
  for (let i = 0; i < len; i++) {
      if (arrS[i] === undefined || arrT[i] === undefined) {
          continue;
      } else {
          if (arrS[i] === "#") {
              result1.pop();
          } else {
              result1.push(arrS[i]);
          }
          if (arrT[i] === "#") {
              result2.pop();
          } else {
              result2.push(arrT[i]);
          }
      }
  }
  let output1 = result1.join('');
  let output2 = result2.join('');
  if (output1 === output2) {
      return true;
  } else {
      return false;
  }
}

console.log(backspaceCompare("a##d", "#a#d"))

/*
    CAN STRING ONE BE MADE FROM STRING TWO

    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */


function canBuildS1FromS2(givenStr, availableStr) {
  let given = {};
  let available = {};
  givenStr.toLowerCase().split("").map(letter => {
      if (given[letter]) {
          given[letter]++;
      } else {
          given[letter] = 1;
      }
  })
  availableStr.toLowerCase().split("").map(letter => {
      if (available[letter]) {
          available[letter]++;
      } else {
          available[letter] = 1;
      }
  })
  for (const key in given) {
      if (available.hasOwnProperty(key)) {
          if (available[key] >= given[key]) {
              continue;
          } else {
              console.log(`second string is missing ${key}`)
              return false;
          }
      } else {
          console.log(`second string is missing ${key}`)
          return false;
      }
  }
  return true;

}

console.log(canBuildS1FromS2("hello", "helo"))