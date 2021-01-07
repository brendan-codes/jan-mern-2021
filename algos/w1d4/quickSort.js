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


function Partition(arr){
    let newArr =[]
    let newArrLeft = []
    let newArrRight =[]
    let pivot = Math.floor(arr.length/2);

    for(let i=0; i<arr.length; i++){
        if (arr[i] <= pivot){
    newArrLeft.push(arr[i]);
    }else{
    newArrRight.push(arr[i]);
    }
}
    newArr=[...newArrLeft, ...newArrRight]
    return newArr;
}

arr =[3,40,13,23,35,1,2,5,80]
console.log(newArrLeft)
console.log(newArrRight)
console.log(Partition);