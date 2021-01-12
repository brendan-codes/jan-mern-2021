// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,11], 16)

// O(n2)

// inputs
// k = 16
// arr = [2,5,3,6,7,0,0,23,11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

// 2 for loops
// sum variable


function findConsqSums(arr, k) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        console.log("Outer Loop: " + i)
        let sum = 0;
        let arrC = [];
        for (let j = i; j < arr.length; j++) {
            console.log("Inter Loop: " + j)
            sum += arr[j];
            console.log("This is number being added: " + sum)
            arrC.push(arr[j]);
            console.log("This is number being pushed: " + arrC)
            if (sum == k) {
                console.log("This is number being pushed: " + arrC)
                newArr.push(arrC);
                console.log("this is the newArr push:" + newArr)
                break;
            }
            if (sum > k) {
                break;
            }
        }
    }
    return newArr;
}

console.log(findConsqSums([2,5,3,6,7,0,0,23,11], 16));

//let arrays =[]
    //for loop for testing each element
        //sum = 0
        //tempArray = [i]
            //for loop for adding values
            // if test + j < k
            //     sum = test + num
            //     tempArray.push(num)
            // else if test + num === k
            //     tempArray.push(num)
            //     arrays.push[tempArray]
            //     break
            // else
            //     break

