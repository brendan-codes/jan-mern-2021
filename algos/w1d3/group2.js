// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let m = Math.floor(arr.length / 2)
    let l = arr.slice(0, m)
    let r = arr.slice(m)
    return mergeSortedArrays(mergeSort(l), mergeSort(r));

}

// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
    let len = arr1.length + arr2.length
    let merged = [];
    let l = 0;
    let r = 0;
    for (let i = 0; i < len; i++) {
        if (arr1[l] > arr2[r]) {
            console.log("arr1[l]: " + arr1[l])
            console.log("arr2[r]: " + arr2[r])
            merged.push(arr2[r]);
            r++;
        } else {
            merged.push(arr1[l])
            l++;
        }
        console.log("merged array: " + merged)
    }
    return merged;
}


mergeSortedArrays([1, 3] [2, 4]);


// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);