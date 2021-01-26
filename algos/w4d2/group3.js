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
  Input: S = "a#bc", T = "ad#c"
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
    let arr1= []
    let arr2 = []
    for (let i = 0; i < S.length; i ++) {
      if(S[i] !== '#'){
        arr1.push(S[i]);
        console.log(arr1);
      } else {
        arr1.pop();
      }
    }
    for (let i = 0; i < T.length; i ++) {
      if(T[i] !== '#'){
        arr2.push(T[i]);
        console.log(arr2);
      } else {
        arr2.pop();
      }
    }
    return arr1.join() === arr2.join();
  }


  console.log(backspaceCompare("ab##", "c#d#"));




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

function canBuildS1FromS2(neededStr, availableStr) {
  let dict = {};
  if (neededStr.length > availableStr.length){
    return false;
  }
  neededStr = neededStr.toLowerCase();
  availableStr = availableStr.toLowerCase();
  for (let i = 0; i < availableStr.length; i++){
    if (dict.hasOwnProperty(availableStr[i])){
      dict[availableStr[i]]++;
    } else {
      dict[availableStr[i]] = 1;
    }
  }
  for (let i = 0; i < neededStr.length; i++) {
    if (dict.hasOwnProperty(neededStr[i])) {
      dict[neededStr[i]]--;
      if (dict[neededStr[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
console.log(canBuildS1FromS2('Hello World','lloeh word'))