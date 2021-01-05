// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
// Array: Insertion Sort

// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

// shifting
function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {

        // save the current element
        var temp = arr[i];

        // save the previous index
        var j = i - 1;

        // while j is within the bounds of the array
        // and that element is larger than temp
        while (j >= 0 && arr[j] > temp) {
            // shift to the left and decrement j
            arr[j + 1] = arr[j];
            j--;
        }
        // when the loop completes, move the temp into the proper location
        arr[j + 1] = temp;
    }
    return arr;
};
//  j
//[ 2, 3, 4, 6, 20]
//               2 temp

// swapping
const insertionSortDestructuredSwap = (arr) => {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        // hold the index instead of the temp
        let idx = i;
        let j = i - 1;
        // compare with indexes
        while (j >= 0 && arr[j] > arr[idx]) {
            // swap in one line
            [arr[j], arr[idx]] = [arr[idx], arr[j]];
            j--;
        }
    }
    return arr;
}

//  - efficient for small data sets
//  - constant memory / space O(1)

// Time Complexity
//   - Best: n when array is already sorted
//   - Average: O(n^2)
//   - Worst: O(n^2) when the array is reverse sorted

// this sort splits the array into two portions (conceptually, not literally)

// the left portion will become sorted
// the right portion (that hasn't been iterated over yet) is unsorted

// can shift or swap target element until it reaches desired position
// shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position availale to shift items)
//   4. if item to the left of current is greater than current item,
//      shift the left item to the right
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat

// swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat

// bonus challenge: use destructuring for your swap