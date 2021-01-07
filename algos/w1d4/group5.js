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
//0/1/2/3/4/5
 [7,5,9,2,6,   3]
[1,2,9,5,6,3,9]
[1,2,5,9,6,3]

// let pivot =arr[arr.length]
// let right =arr.length-1
//compareleft to rightvalue
//once the left value is bigger than the pivot,we move the right to the left (going opposite way now)
// 1) when left&right > pivot
// 2) when left>pivot and right < pivot
// 3) when left & right < pivot
// then move theright bound to theleftuntilit crosses
[7,5,9,2,6,3]
let Partition = (arr, left, right) => {
    let pivot =arr[arr.length-1]
    let left = arr[0]
    let right= pivot-1
    let leftInd= i;
    let rightInd =j;
    for(let i = 0; i < right; i++; ){
if(left > pivot && pivot < right){
    right -=
}
    }

}

//turn offautosave