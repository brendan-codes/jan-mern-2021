//Spencer Huyck, Daniel Havens, Gary McKinnon, Zach Munson

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
    if(str === ""){
        return false;
    }
    let letterCount = {}; // create an object for storage
    str.toLowerCase().split("").map(letter => { // make all lowercase, use split to turn the string into an array to map
        if (letterCount[letter]) { //if the key exists in letterCount--add one to value count
            letterCount[letter]++;
        } else { //if not, create entry in letterCount
            letterCount[letter] = 1;
        }
    })
    const count = Object.entries(letterCount); //creates an array of arrays [[letter, count],[],[]]
    let oddCounter = 0;//set counter for odd numbersin letterCount
    count.map(letterArr => {//map and see how many odd numbers
        if (letterArr[1] % 2 !== 0) { //check values to see if even or odd
            oddCounter++;
        }
    })
    if (oddCounter > 1) {//if there is more than 1 letter that is odd, it can't be their palindrome
        return false;
    } else {
        return true;
    }

console.log(canStrBecomePalindrome("aBba"))
}