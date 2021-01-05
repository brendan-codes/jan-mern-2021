// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
// Array: Insertion Sortnote

// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
//-----------------------------------------------------------------------------\\

function insertionSort(arr) {
    //for loop to cycle through elements
    for(let i=1; i<arr.length; i++){
        let idx = arr[i]
        //for loop to compare elements
        for(let j = i; j >=0 ; j--){
            //If item to the left is < current item
            if(idx<arr[j-1]){
                arr[j]=arr[j-1]
            }else{
            arr[j] = idx
                break
            }


        }

    }return arr
};
    console.log(insertionSort([2,4,1,5,3]))
//-----------------------------------------------------------------------------

//GOODJOB Yeah!!!

    // const numbers1  = [9,6,5,3,1,8,7,2,4];
    // const numbers2  = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

    // function insertionSort(arr){
    //     for(let i=1; i<arr.length; i++){
    //         while(i>0 && arr[i-1] > arr[i]){
    //         //swap
    //         [arr[i-1], arr[i]]=[arr[i], arr[i-1]];
    //         i--;
    //         }
    //     }
    //     return arr
    // }
    // console.log(insertionSort(numbers1));
    // console.log(insertionSort(numbers2));





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