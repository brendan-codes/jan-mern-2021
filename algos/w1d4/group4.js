// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// DanielHavens,Josiah_S,Enzo Jimenez,KyleHowell

// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition


let Partition = (arr, left, right) => {
    let pivot = arr[Math.floor(left.length + right.length / 2)]
    while(left < right){
        while(arr[left] < pivot){
        left++;
        }
        while (arr[right]>pivot){
        right--;
        }
        if(left > pivot){
            let temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
            left++;
            right--;
        }
    }
}


var testArray = [9, -1, 3, 1, 7, 5, 0, -4, 2];
console.log(Partition(testArray,0, testArray.length-1));

//turn offautosave
