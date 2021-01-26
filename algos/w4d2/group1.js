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
  let sArr = [];
  let tArr =[];
  for(let i =0; i<S.length; i++){
    if(S[i]!=="#"){
      sArr.push(S[i])
      console.log("S if at push", sArr)
    }
    else{
      sArr.pop();
      console.log("S if at pop",sArr)}

  }
  for (let i=0; i<T.length; i++){
    if(T[i]!=="#"){
      tArr.push(T[i])
    }
    else{tArr.pop()}

  }
  sArr = sArr.join("")
  tArr = tArr.join("")
  console.log("sArr",sArr)
  console.log("tArr",tArr)
  return sArr === tArr;

}
console.log(backspaceCompare("ad##c","ad##c"))




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

  if (availableStr.length < neededStr.length) { return false; }
  let neededStrDict = {};
  let availableStrDict = {};
  let needNumber = neededStr.length
  let availableNumber =0
  for (let letter of neededStr) {

      if(neededStrDict.hasOwnProperty(letter)){
          neededStrDict[letter]++;
      }else{
          neededStrDict[letter] = 1;
      }
  }
  for (let letter of availableStr) {
      availableStrDict.hasOwnProperty(letter) ? availableStrDict[letter]++ : availableStrDict[letter] = 1;
  }
  console.log('availableStr', availableStrDict);
  console.log('neededStr', neededStrDict);
  // loop over the letters we want
  for (let key of Object.keys(neededStrDict)) {
    if(neededStrDict[key]<= availableStrDict[key]){
      availableNumber++
        console.log("yay")}
    else{console.log("nope")}
  console.log("needed dict",key)
  console.log("valaue",neededStrDict[key])
  }
  console.log(needNumber)
  console.log(availableNumber)
  // return count;
  }
  console.log(canBuildS1FromS2("Hello World","lloeh wordl"));



