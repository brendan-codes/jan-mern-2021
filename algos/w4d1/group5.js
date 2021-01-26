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
//1. create a new empty object
//2. each letter key: value - counter
//3. if counter = 1 => once
//4. if counter = 2 => the rest of the string

// {
//   "b": 3
// }

function palindrone(word){
    let obj = {};
    let counter = 0;
    for (let i=0; i < word.length; i++){
      if (obj.hasOwnProperty(word[i])){
        obj[word[i]]++;
        // console.log("Yes", word[i], obj[word[i]]);
      }
      else {
        obj[word[i]] = 1;
      }

      console.log("final-obj",obj)

    //   for (let i =0; i<word.length; i++)
    //       if()
    //     console.log(word[i])
    // }
    }
    Object.values(obj).forEach(val =>{
      if (val>1){
        if (val%2!=0 ){
          console.log("true")
        }
      }
      else{
        console.log("false")
      }
    });
    return obj;
    }

  console.log(palindrone('abcab'))
