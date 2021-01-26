// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "racecar" = "racecar"
// "tacocat"

// 2 ts, 2 as, 2cs, 1o

// "baba" => true
// "baab"

// "bcda" => false
// "abcd"

// let str = "abc";
// str[0] "a"
// str[1] "b"
// str[str.length-1] "c"

// str[0] = "z";


function canStrBecomePalindrome(str) {

    // consider edge case - if length === 1, it is automatically true
    if (str.length === 1) {
        return true;
    }

    // create a letter count object to keep track of no. of instances of a letter
    let letterCount = {};

    // iterate through string - if letter exists, up the count, if it doesn't, set up a key + its value to 1
    for (let i=0; i<str.length; i++) {
        if (letterCount[str[i]]) {
            letterCount[str[i]]++;
        } else {
            letterCount[str[i]] = 1;
        }
    }

    console.log(letterCount);

    // consider length of string - if str.length is even, every letter instance needs to be even to create a palindrome
    // if a single instance of odd count occurs, palindome is NOT possible --> set to false.
    if (str.length % 2 === 0) {
        for (const letter in letterCount) {
            if (letterCount[letter] % 2 === 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    // if str.length is odd,there can only be one instance where a letter shows up an odd no. of times --> if more than once, return false
    if (str.length % 2 === 1) {
        let oddCount = 0;
        for (const letter in letterCount) {
            if (letterCount[letter] % 2 === 1) {
                oddCount++;
            }
        }

        if (oddCount > 1) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(canStrBecomePalindrome("racecar")); // true
console.log(canStrBecomePalindrome("abcde")); // false
console.log(canStrBecomePalindrome("bb")) // true;
console.log(canStrBecomePalindrome("aabbccdde")) // true
console.log(canStrBecomePalindrome("r")) // true
console.log(canStrBecomePalindrome("apple")) // false
