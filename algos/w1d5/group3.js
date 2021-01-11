// Spencer Huyck, Daniel Havens, Josiah_S, Kristine Xie

//Array: Quick Sort
// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif

// Create a function that uses yesterday’s partition to sort an array in-place.
//   Time Complexity
//     - Best: O(n log(n))
//     - Average: O(n log(n))
//     - Worst: O(n^2)


//   Steps:
// - base case: if left is greater than right, return
// - recursively partition the array
// - start by partitioning the full array (use the previously built partition algo)
// - then partition the left side of the array (left of new pivot idx)
//   and the right side (right of new pivot idx), recursively

function pivot(array, startIndex=0, endIndex=array.length-1) {
    let pivot = array[startIndex];
    let indexToSwap = startIndex;

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    for (let i=startIndex + 1; i<array.length; i++) {
        if (pivot > array[i]) {
            indexToSwap++;
            swap(array, indexToSwap, i);
        }
    }

    let newSwap = array[indexToSwap];
    array[indexToSwap] = pivot;
    array[startIndex] = newSwap;

    return indexToSwap;
}



function quickSort(arr, left=0, right=arr.length-1) {
    let pivotIndex = pivot(arr, left, right);


    if (left < right) {
        // recursively call it for LEFT subarray
        quickSort(arr, left, pivotIndex-1);

        // recursively call it for the RIGHT subarray
        quickSort(arr, pivotIndex+1, right);
    }

    return arr;
}
console.log(quickSort([7, 8, 4, 5, 2, 9, 11]))


// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

let swap = (arr, i, j) => {
    // swap two indexes in an array
    [arr[i], arr[j]] = [arr[j], arr[i]]
};

let PartitionLomuto = (arr, left, right) => {
    if (left === undefined) {
        left = 0;
    }

    if (right === undefined) {
        right = arr.length - 1;
    }
    // select a pivot
    const pivot = arr[right];
    // start at the left most index
    let i = left;

    // looping from the left index until the right
    for (let j = left; j < right - 1; j++) {
        // if that value is less than or equal to the pivot
        if (arr[j] <= pivot) {
            // swap!
            swap(arr, i, j);

            // and move i!
            i++;
        }
    }
    // final swap to put the pivot back in the right spot
    swap(arr, i, right);

    // and return it's index
    return i;
}

console.log(quickSort([7, 8, 4, 5, 2, 9, 11]))
// let partitionHoare = (arr, left, right) => {
//     if (left === undefined) {
//         left = 0;
//     }

//     if (right === undefined) {
//         right = arr.length - 1;
//     }

//     const pivot = arr[Math.floor((left + right) / 2)];

//     while (left <= right) {
//         while (arr[left] < pivot && left <= right) {
//             left++;
//         }
//         while (arr[right] > pivot) {
//             right--;
//         }
//         if (left <= right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }

//     return left;
// }