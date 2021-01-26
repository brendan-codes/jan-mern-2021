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


function canStrBecomePalindrome(str) {
// traverse through string and put those into a dictionary and count is the value
  let letterDictionary = {};
  let oddCount = 0;
  for (let i = 0; i < str.length; i++){
    if (letterDictionary.hasOwnProperty(str[i])){
      letterDictionary[str[i]] += 1;
    }
    else{
      letterDictionary[str[i]]= 1;
    }
  }
  // {a: 2, b: 2, c: 4}
  for(const property in letterDictionary){
    if (letterDictionary[property] % 2 == 1){
      oddCount += 1;
      if(oddCount > 1){
        return false;
      }
    }
  }
  return true;
}

console.log(canStrBecomePalindrome("aabbccdde"));