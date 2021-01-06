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
    const midpoint =arr.length / 2
    if(arr.length < 2){
    return arr
    }
const arr1 = arr.splice(0,midpoint)
return mergeSortedArrays(arr1, mergeSort(arr))

}
//Someone has auto save onfixitplz
//
// return a new sorted array with all of the values of arr1 and arr2
function mergeSortedArrays(arr1, arr2) {
    let newArr=[];
while(arr1.length && arr2.length)
// Push to the new Array and use Shift to remove the value from the split arrays.when the length of either becomes zero,
// the while loop will end.
    {
    if(arr1[0] < arr2[0]){
        newArr.push(arr1.shift())
    }else newArr.push(arr2.shift());
    }
    //concatinate with any remaining values inthe split arrays(odd number of values).
    return [...newArr,...arr1,...arr2]
}

let arr =[4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(arr))

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
// -------------------------------------------/----------/ -\\
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));
// should log [9, 12, 15, 22, 44, 49, 88, 99, 111]
// ------------------------------------------------------  - -------\\

function mergeSort(left, right) {
    let arr = []
    // if an array is found empty, ends loop
    while (left.length && right.length) {
        // Choose the smaller element of the left and right arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    // Concat leftover elements
    return [ ...arr, ...left, ...right]
}

function mergeSortedArrays(array) {
    const half = array.length / 2
    // Base case or terminating case
    if(array.length < 2){
    return array
    }
    // identify the midpoint and split the array into two sub arrays
    const left = array.splice(0, half)
    return mergeSort(mergeSortedArrays(left),mergeSortedArrays(array))
}


array = [88, 22, 44, 12, 99, 111, 9, 15 ,49];
console.log(mergeSortedArrays(array));
// should log [9, 12, 15, 22, 44, 49, 88, 99, 111]var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)

function mergeSort(left, right) {
    let arr = []
    // if an array is found empty, ends loop
    while (left.length && right.length) {
        // Choose the smaller element of the left and right arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    // Concat leftover elements
    return [ ...arr, ...left, ...right]
}

function mergeSortedArrays(array) {
    const half = array.length / 2
    // Base case or terminating case
    if(array.length < 2){
    return array
    }
    // identify the midpoint and split the array into two sub arrays
    const left = array.splice(0, half)
    return mergeSort(mergeSortedArrays(left),mergeSortedArrays(array))
}


array = [88, 22, 44, 12, 99, 111, 9, 15 ,49];
console.log(mergeSortedArrays(array));
// should log [9, 12, 15, 22, 44, 49, 88, 99, 111]var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)

function mergeSort(left, right) {
    let arr = []
    // if an array is found empty, ends loop
    while (left.length && right.length) {
        // Choose the smaller element of the left and right arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    // Concat leftover elements
    return [ ...arr, ...left, ...right]
}

function mergeSortedArrays(array) {
    const half = array.length / 2
    // Base case or terminating case
    if(array.length < 2){
    return array
    }
    // identify the midpoint and split the array into two sub arrays
    const left = array.splice(0, half)
    return mergeSort(mergeSortedArrays(left),mergeSortedArrays(array))
}


array = [88, 22, 44, 12, 99, 111, 9, 15 ,49];
console.log(mergeSortedArrays(array));
// should log [9, 12, 15, 22, 44, 49, 88, 99, 111]var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)

function mergeSort(left, right) {
    let arr = []
    // if an array is found empty, ends loop
    while (left.length && right.length) {
        // Choose the smaller element of the left and right arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    // Concat leftover elements
    return [ ...arr, ...left, ...right]
}

function mergeSortedArrays(array) {
    const half = array.length / 2
    // Base case or terminating case
    if(array.length < 2){
    return array
    }
    // identify the midpoint and split the array into two sub arrays
    const left = array.splice(0, half)
    return mergeSort(mergeSortedArrays(left),mergeSortedArrays(array))
}


array = [88, 22, 44, 12, 99, 111, 9, 15 ,49];
console.log(mergeSortedArrays(array));
// should log [9, 12, 15, 22, 44, 49, 88, 99, 111]var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)

function mergeSort(left, right) {
    let arr = []
    // if an array is found empty, ends loop
    while (left.length && right.length) {
        // Choose the smaller element of the left and right arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    // Concat leftover elements
    return [ ...arr, ...left, ...right]
}

function mergeSortedArrays(array) {
    const half = array.length / 2
    // Base case or terminating case
    if(array.length < 2){
    return array
    }
    // identify the midpoint and split the array into two sub arrays
    const left = array.splice(0, half)
    return mergeSort(mergeSortedArrays(left),mergeSortedArrays(array))
}


array = [88, 22, 44, 12, 99, 111, 9, 15 ,49];
console.log(mergeSortedArrays(array));
// should log [9, 12, 15, 22, 44, 49, 88, 99, 111]var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)

function mergeSort(left, right) {
    let arr = []
    // if an array is found empty, ends loop
    while (left.length && right.length) {
        // Choose the smaller element of the left and right arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    // Concat leftover elements
    return [ ...arr, ...left, ...right]
}

function mergeSortedArrays(array) {
    const half = array.length / 2
    // Base case or terminating case
    if(array.length < 2){
    return array
    }
    // identify the midpoint and split the array into two sub arrays
    const left = array.splice(0, half)
    return mergeSort(mergeSortedArrays(left),mergeSortedArrays(array))
}


array = [88, 22, 44, 12, 99, 111, 9, 15 ,49];
console.log(mergeSortedArrays(array));
// should log [9, 12, 15, 22, 44, 49, 88, 99, 111]var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// ----------------------------------------------------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// -------------  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// -  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

// -  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

//   - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

//   - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));

  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));
  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));
  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));
  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));  - var x = arr1.concat(array2, array3)
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
const mergeSort = arr => {
    if (arr.length < 2){
    return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
    if (left[0] <= right[0]){
        res.push(left.shift());
    }
    else{
        res.push(right.shift());
    };
    }
    while (left.length){
    res.push(left.shift());
    };
    while (right.length){
    res.push(right.shift());
    };
    return res;
};
console.log(mergeSort(arr));  - var x = arr1.concat(array2, array3)
  - var x = arr1.concat(array2, array3)
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






//       - if omitted, slices from provided 'begin' to end of array






//       - if omitted, slices from provided 'begin' to end of array






//       - if omitted, slices from provided 'begin' to end of array






//       - if omitted, slices from provided 'begin' to end of array






//       - if omitted, slices from provided 'begin' to end of array





//       - if omitted, slices from provided 'begin' to end of array



//       - if omitted, slices from provided 'begin' to end of array

//       - if omitted, slices from provided 'begin' to end of array
//       - if omitted, slices from provided 'begin' to end of array

