// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
// Array: Insertion Sort

// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


// 2for loops
//compare



const insertionSort = (arr) => {
    let long = arr.length;
    for(let i = 1; i < long; i++) {
        let j = i;
        while (j > 0 && arr[j-1] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j -= 1;
        }
    }
    return arr;
}

console.log(insertionSort([8,3,5,6,7,2]));

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
//  - efficient for small data sets
//  - constant memory / space O(1)
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
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
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
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
//  - efficient for small data sets
//  - constant memory / space O(1)
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

//   // swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat

// bonus challenge: use destructuring for your swap