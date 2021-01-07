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

const partition = (arr, left=0, right=arr.length-1) => {
    const pivot = arr[right];
    let i = left;
    let j = right;
    while (i !== j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return j;
};

let myArr = [1, 12, 4, 9, 15, 2, 20, 7, 6, 3, 8, 10, 30];
console.log(partition(myArr, 0, 5))