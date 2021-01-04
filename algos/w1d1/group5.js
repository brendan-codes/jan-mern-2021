// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/

let array_x = [5, 1, 6, 2, 4, 3];

// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
// shuffle(arr)
for(let i = 0 ; i < arr.length; i++) {
    for(let j = 0 ; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
return arr;
}

bubbleSort(array_x);




// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/







// Selection Sort
let array_y = [5, 1, 6, 2, 4, 3];

console.log(array_y);

function selectionSort(arr) {
    for(let i = 0 ; i < arr.length; i++){
        let min = i;
        for(let j = i+1 ; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

selectionSort(array_y);

// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.