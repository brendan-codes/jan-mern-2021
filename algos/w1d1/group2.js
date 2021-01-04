// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

let arr =[2,5,3,1,2];
function bubbleSort(arr) {
  console.log(arr);

  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr.length - i - 1; j++){
      if ( arr[j] > arr[j+1] ) {
      //swap
        let temp = arr[j];
        arr[j] =arr[j+1];
        arr[j+1] = temp;
      }
      console.log('\nfirst for loop i=', i , 'arr is ->', arr)
    }
  }

  console.log('ending arr ->', arr)
  return arr
}
bubbleSort(arr)

// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/


// Selection Sort

// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.

function selectionSort(arr) {
  console.log(arr);

let min = arr[0];
for(let i=1; i<arr.length; i++){
   for(let j=i+1; j<arr.length; j++){
     if(min>arr[j]){
    //swap
    let temp=min;
    min = arr[j];
    arr[j] = temp;
     }
   }
}
return arr;
}


// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png