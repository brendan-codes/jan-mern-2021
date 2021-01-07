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


const Partition = (arr, left, right) => {
    let pivot = arr[left];
    let i =left - 1;
    let j =right + 1;

    while(true) {
        while(true) {
            i+= 1
            if(arr[i] >= pivot){
                break;
            }
        }


        while(true) {
            j-= 1
            if(arr[j] <= pivot){
                break;
            }
        }


        if(i >= j) {
            return j;
        }

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] =temp;
    }
}












// function quick_Sort(origArray) {
    //This is a check to ensure the array is more than one
// 	if (origArray.length <= 1) {
// 		return origArray;
// 	} else {

// 		var left = [];
// 		var right = [];
// 		var newArray = [];
// 		var pivot = origArray.pop();
// 		var length = origArray.length;

// 		for (var i = 0; i < length; i++) {
// 			if (origArray[i] <= pivot) {
// 				left.push(origArray[i]);
// 			} else {
// 				right.push(origArray[i]);
// 			}
// 		}

// 		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
// 	}
// }

// var myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);