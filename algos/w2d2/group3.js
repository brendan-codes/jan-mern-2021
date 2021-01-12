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

//----------------i
// findConsqSums([2,5,3,6,7,0,0,23,11], 16)
function findConsqSums(arr, k) {
  console.log('\n--------original ->',arr, k, '\n');
  var output=[];

  // outer for loop
  for (var i=0; i< arr.length; i++) {
    // for every i iteration have a sum 0
      var sum = 0

    // var temp array to consecutely add vals to it
      var sumArr = [];
      var index = i;
    //
      while (index < arr.length && sum < k) {
          // push vals into sumArr and check k
          // if (sum < k) {
          // }
          sumArr.push(arr[index]);
          sum += arr[index];
          index++;
      }
      if (sum == k) {
          output.push(sumArr);
      }



  }
  console.log('before return->', output);
  return output;
// forloopforeach elelemnt
//whileloop to increase idx -- till
}

// console.log(findConsqSums([2,5,3,6,7,0,0,23,11], 16))
findConsqSums([2,5,3,6,7,0,0,23,11], 16)