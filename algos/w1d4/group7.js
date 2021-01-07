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


let quickSort = (arr[], low, high) => {
    if(low < high){
        let idx = Partition(arr, low, high)
        quickSort(arr, low, idx - 1)
    }
    return
}

let Partition = (arr, left, right) => {
    let pivot = Math.floor(arr.length / 2)
    left = 0
    right = arr.length - 1

    let temp = arr[pivot]
    arr[pivot] = arr[arr.length-1]
    arr[arr.length-1] = temp

    for(let i=0; i<pivot; i++){
        console.log(arr[i])
        for(let j=arr.length-2; j>pivot; j--){
            console.log(arr[j])
            if(arr[i] > arr[j]){
                let temp2 = arr[i]
                arr[i] = arr[j]
                arr[j] = temp2
            }
        }
    }
}


console.log(Partition([5, 3, 2, 7, 1, 4, 6]))       let idx = Partition(arr, low, high)
        quickSort(arr, low, idx - 1)
    }
    return
}

let Partition = (arr, left, right) => {
    let pivot = Math.floor(arr.length / 2)
    left = 0
    right = arr.length - 1

    let temp = arr[pivot]
    arr[pivot] = arr[arr.length-1]
    arr[arr.length-1] = temp

    for(let i=0; i<pivot; i++){
        console.log(arr[i])
        for(let j=arr.length-2; j>pivot; j--){
            console.log(arr[j])
            if(arr[i] > arr[j]){
                let temp2 = arr[i]
                arr[i] = arr[j]
                arr[j] = temp2
            }
        }
    }
}


console.log(Partition([5, 3, 2, 7, 1, 4, 6]))