// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "racecar"
// "tacocat"

// "baba" => true
// "baab"

// "bcda" => false
// "abcd"

let str1 ="apabbccdde";
let str2 ="racecar";
let str3 ="baba";
let str4 ="bcda";
let str5 ="boitdrtyhygreoirorhrhtoihogihrtohcda";
let str6 ="bcda";

function canStrBecomePalindrome(str) {
    console.log('\n------------');
  // separate the keys
  // if odd number > 1 -> false
    let countOdd = 0; // how many times we find odd
    let strDict = {};
    console.log('\n', str);

    for (let letter of str) {
      // put str in object
      strDict.hasOwnProperty(letter) ? strDict[letter]++ : strDict[letter] = 1;
    }
    // loop thru keys to check count if it is odd > 1
    for (let key in strDict) {
      // add count here
    //   count = strDict[key] // ?
      if (strDict[key] %2 != 0) {
          countOdd++; // if we find an odd number incretemt
      }
      if (countOdd > 1) {
          return false; // if we find odd > 1 make it false
      }
    }
    return true;
  // console.log('strDict is ->',strDict);
}
console.log(canStrBecomePalindrome(str4));
// canStrBecomePalindrome(str2)
// canStrBecomePalindrome(str3)

