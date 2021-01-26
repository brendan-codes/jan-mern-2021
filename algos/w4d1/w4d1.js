// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "racecar" = "racecar"
// "tacocat"

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
    // check zero length edge case
    if (str.length === 0) {
        return false;
    }

    // create a map for character frequencies, a count of odds, and if the length is odd bool
    const charFrequencies = {};
    let oddFreqCount = 0;
    let isOddLen = str.length % 2 !== 0;

    // loop characters of your string
    // 0(n)
    for (const char of str) {
        if (!charFrequencies.hasOwnProperty(char)) {
            charFrequencies[char] = 1;
        } else {
            charFrequencies[char]++;
        }
    }

    // {"a": 2, "b": 2, "c": 1}

    // loop frequencies.
    // 0(n+m)
    for (const key of Object.keys(charFrequencies)) {
        const charFreq = charFrequencies[key];

        // if odd occurrences
        if (charFreq % 2 !== 0) {
            oddFreqCount++;

            // either the string is odd and we allow one odd number
            // or the string is even and we allow none

            // either way fail right here
            if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
                return false;
            }
        }
    }

    // get through the for in loop? you are true
    return true;
}