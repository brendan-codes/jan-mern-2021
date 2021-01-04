// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for (let i=0;i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if (arr[i] < arr[j]){
                let temp = arr[j]
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr
}


console.log(bubbleSort([34, 23, 13, 9, -1, 12, 14]))
//two for loops
//first loop grab the value
//second loop test the value andinitiates aswap ofindextpositionsifnecessary
//conditional --if greater swap, else keep same (move to next value)

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
    for (let i=0;i<arr.length;i++){
        let min = arr[i];
        for (j=0;j<arr.length;j++)
        if(arr[j] > min){
            let temp = arr[j];
            arr[j]=arr[i];
            arr[i]=temp;

        }

    }
    return arr
}

console.log(selectionSort([34,23,13, 9, -1, 12, 14]))

// Time Complexity
//   - Best: O(n^2)
//   - Average: O(n^2)
//   - Worst: O(n^2)

// https://www.programmingsimplified.com/images/c/selection-sort.png