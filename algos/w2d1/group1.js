// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

arr1 = [1,2,2,2,7]
arr2 = [2,2,6,6,7]

function intersection(arr1, arr2) {
    let newArr = []
    // arr3 = arr1.concat(arr2);
     // [1,2,2,2,7,2,2,6,6,7]
     arr1.concat(arr2).map((val) => {
        console.log(val);
      });
    return newArr;
}


// inputs are always to be sorted
// not the same length
// negative numbers? no
// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array

//nested for loop solution
function intersection(arr1, arr2) {
    let arr3 = [];
    for (i=0; i<arr1.length; i++) {
        for(j=0; j<arr2.length; j++) {
            // console.log("i: ", i,"j: ",j)
            if (arr1[i] == arr2[j] && arr1[i] != arr3[arr3.length-1]) {
                arr3.push(arr1[i])
            }
        }
    }
    for (k=0; k<arr3.length; k++)
    return arr3;
}
console.log(intersection(arr1,arr2));



// function intersection(arr1, arr2) {
//     let newArr = [];

//     let values = {};

//     arr1 = arr1.filter((val, index) => {
//       return arr1.indexOf(val) === index;
//     });
//     arr2 = arr2.filter((val, index) => {
//       return arr2.indexOf(val) === index;
//     });
//     arr1.map((val1) => {
//       arr2.map((val2) => {
//         if (val1 === val2) {
//           newArr.push(val1);
//         }
//       });
//     });

//     console.log(arr1);
//     return newArr;
//   }// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array

//nested for loop solution
function intersection(arr1, arr2) {
    let arr3 = [];
    for (i=0; i<arr1.length; i++) {
        for(j=0; j<arr2.length; j++) {
            // console.log("i: ", i,"j: ",j)
            if (arr1[i] == arr2[j] && arr1[i] != arr3[arr3.length-1]) {
                arr3.push(arr1[i])
            }
        }
    }
    for (k=0; k<arr3.length; k++)
    return arr3;
}
console.log(intersection(arr1,arr2));



// function intersection(arr1, arr2) {
//     let newArr = [];

//     let values = {};

//     arr1 = arr1.filter((val, index) => {
//       return arr1.indexOf(val) === index;
//     });
//     arr2 = arr2.filter((val, index) => {
//       return arr2.indexOf(val) === index;
//     });
//     arr1.map((val1) => {
//       arr2.map((val2) => {
//         if (val1 === val2) {
//           newArr.push(val1);
//         }
//       });
//     });

//     console.log(arr1);
//     return newArr;
//   }// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array

//nested for loop solution
function intersection(arr1, arr2) {
    let arr3 = [];
    for (i=0; i<arr1.length; i++) {
        for(j=0; j<arr2.length; j++) {
            // console.log("i: ", i,"j: ",j)
            if (arr1[i] == arr2[j] && arr1[i] != arr3[arr3.length-1]) {
                arr3.push(arr1[i])
            }
        }
    }
    for (k=0; k<arr3.length; k++)
    return arr3;
}
console.log(intersection(arr1,arr2));



// function intersection(arr1, arr2) {
//     let newArr = [];

//     let values = {};

//     arr1 = arr1.filter((val, index) => {
//       return arr1.indexOf(val) === index;
//     });
//     arr2 = arr2.filter((val, index) => {
//       return arr2.indexOf(val) === index;
//     });
//     arr1.map((val1) => {
//       arr2.map((val2) => {
//         if (val1 === val2) {
//           newArr.push(val1);
//         }
//       });
//     });

//     console.log(arr1);
//     return newArr;
//   }// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array

//nested for loop solution
function intersection(arr1, arr2) {
    let arr3 = [];
    for (i=0; i<arr1.length; i++) {
        for(j=0; j<arr2.length; j++) {
            // console.log("i: ", i,"j: ",j)
            if (arr1[i] == arr2[j] && arr1[i] != arr3[arr3.length-1]) {
                arr3.push(arr1[i])
            }
        }
    }
    for (k=0; k<arr3.length; k++)
    return arr3;
}
console.log(intersection(arr1,arr2));



// function intersection(arr1, arr2) {
//     let newArr = [];

//     let values = {};

//     arr1 = arr1.filter((val, index) => {
//       return arr1.indexOf(val) === index;
//     });
//     arr2 = arr2.filter((val, index) => {
//       return arr2.indexOf(val) === index;
//     });
//     arr1.map((val1) => {
//       arr2.map((val2) => {
//         if (val1 === val2) {
//           newArr.push(val1);
//         }
//       });
//     });

//     console.log(arr1);
//     return newArr;
//   }