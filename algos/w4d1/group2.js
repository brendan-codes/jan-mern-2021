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



// let str1 ="apabbccdde";
// let str2 ="racecar";
// let str3 ="baba";

function canStrBecomePalindrome(str) {
    for(var i = 0; i < str.length/2; i++){
    if(str[i] != string[str.length -1 -i]){
        return false
    }
}
    return true
}

// console.log(canStrBecomePalindrome(str1))
// console.log(canStrBecomePalindrome(str2))
// console.log(canStrBecomePalindrome(str3))
