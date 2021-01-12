// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,11], 16)
// i=0 ( 1st: for loop)
// j=i+1( 2nd: while loop)
//smallSum=arr[i];
// 1.a for loop iterate the whole  array
// 2. a while looptofindthesmallerarray(total sum = k)
//=> conditional ( while i < arr.length)
// 3. push small array to the
//4. edge case: if arr[i]=k; return arr[i]

















































































































































































































































































































































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

function findConsqSums(arr, k) {
    let newArr=[];
let smallSum =0
let smallArr =[];
    for (let i=0; i<arr.length; i++){
        if(arr[i] <= k) {
            smallSum=arr[i];
            smallArr=[arr[i]]
        } else{
            continue;
        }
        // for (let j=i+1; j<arr.length; i++)
        let j=i+1
        while (j < arr.length && smallSum < k){
            if(smallSum+= arr[j] <= k){
                smallArr.push(arr[j])
                smallSum+= arr[j];
            }
            j++;
        }
        if (smallSum = k){
            newArr.push(smallArr)
        }

    }
    return newArr;
}

console.log(findConsqSums([2,5,3,6,7,0,0,23,11], 16))


//