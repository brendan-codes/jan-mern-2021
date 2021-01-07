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

//          |left   | pivot   |right
let arr = [9,6,2,8,3,2,8,0,7]
//
//1,5,3,7
//  index left, index right
let Partition = (arr, left, right) => {
  console.log(arr, left, right);
  // pivot value
  if (!left) {
    left = 0;
  }
  if (!right) {
    right = arr.length-1;
  }
  let pivot = arr[Math.floor((left + right) / 2)];
  console.log('pivot ->', pivot)

//compare pivot to left val andrightval
//leftlarger thanpivod
//rightsmaller thanpivot
for(let i=0; i<arr.length/2; i++) {
// checkpiviot if same asindex
if(pivot == i){
// do what?

}
  if(arr[left] > pivot && arr[right] < pivot) {
      // arr[left], arr[right] = arr[right], arr[left];
    console.log('left > pivot < right')
    let temp =arr[left];
    arr[right] = arr[left];
    arr[left] = temp;
    left++;
    right--;
  }
console.log(arr)
}

}
Partition(arr)

//turn offautosave
const pivot = arr[Math.floor((left + right) / 2)];



