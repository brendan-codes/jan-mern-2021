//Sujung Choi, Tim Foltz, Daniel Havens, Enoch Strok// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

//  index arr[0]+ arr[1]+arr[2]=sum
//  given [3, 0, 1]=sum
//  return 2

//sum =arr[i] + sum (4) difference: 1//real difference:2
//index_sum=i+ index_sum(3)


// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6



// sum = n*(n+1)/2; - should be 6 - 4 = returns 2
// (n / 2)(first number + last number) = sum, where n is the number of integers.

function findMissingValue(arr) {
    givenSum = 0;

    for (var i = 0 ; i < arr.length;i++){
        givenSum += arr[i];
    }
    console.log(givenSum)
    console.log(arr.length)
    console.log(givenSum - ((arr.length * (arr.length)/2)))
    return ((arr.length * (arr.length+1)/2)) - givenSum
}


findMissingValue([5, 2, 8, 4, 9, 3, 0, 1,6])
// return 6





// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [17, 18, 3, 5, 6, 9, 10, 11, 12, 13]
// return 3

function minOfSorted(arr, low = 0, high = arr.length - 1) {
    for(let i =0; i<arr.length; i++){
        console.log("i",i)
        console.log("arr[i]",arr[i])
        console.log("arr[i+1]",arr[i+1])
      if(arr[i] > arr[i+1]){
        return arr[i+1]
      }
    }

  }

  minOfSorted([17, 18, 2, 3, 5, 6, 9, 10, 11, 12, 13])