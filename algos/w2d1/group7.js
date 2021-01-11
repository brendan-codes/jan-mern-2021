// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]
// what if [1,2], [2,3,4,5,6,]

let arr1=[2,2,2,7];
let arr2 = [2,2,6,6,7]


// [99, 100]
// [1, 2, 3, 4, 5, 6,7, 8, 99, 100]


function intersection(arr1,  arr2) {


    const res = []
    // check lengths of arrays
    while (arr1.length > 0 && arr2.length > 0 ) {


        if(arr1[0] < arr2[0]) {
            arr1.shift();
        } else if(arr1[0] > arr2[0]) {
            arr2.shift();

        } else if(arr1[0] != res[res.length - 1]) {

            res.push(arr1.shift());
            arr2.shift();

        } else {
            arr1.shift();
            arr2.shift();
        }
    }
    console.log(res)
    return res;

    }
console.log(intersection(arr1, arr2));
// arr = [99, 22, 55, 66];
//         0   1   2  3
// arr.shift()

// arr = [22, 55, 66]
//         0  1    2



    // inputs are always to be sorted
    // not the same length
    // negative numbers? no
    // output has to be sorted? yes
    // space constraints (return a new array)
    // no speed constraints ( ideal O(n) )
    // can the arrays be empty? yes
    // can the arrays have floats or doubles? no, alwahys integers
    // fail case: empty array

function intersection2(arr1, arr2) {
    let len = Math.min(arr1.length, arr2.length);
    const res = []
    let index1 = 0;
    let index2 = 0;
    while(index1 < len && index2 < len) {
        if(arr1[index1] < arr2[index2]) {
            index1++;
        } else if(arr1[index1] > arr2[index2]) {
            index2++;
        } else if(arr1[index1] == res[res.length - 1]){
            index1++;
            index2++;
        } else {
            res.push(arr1[index1]);
            index1++;
            index2++;
        }
    }
    return res;
}




    // output has to be sorted? yes
    // space constraints (return a new array)
    // no speed constraints ( ideal O(n) )
    // can the arrays be empty? yes
    // can the arrays have floats or doubles? no, alwahys integers
    // fail case: empty array

function intersection2(arr1, arr2) {
    let len = Math.min(arr1.length, arr2.length);
    const res = []
    let index1 = 0;
    let index2 = 0;
    while(index1 < len && index2 < len) {
        if(arr1[index1] < arr2[index2]) {
            index1++;
        } else if(arr1[index1] > arr2[index2]) {
            index2++;
        } else if(arr1[index1] == res[res.length - 1]){
            index1++;
            index2++;
        } else {
            res.push(arr1[index1]);
            index1++;
            index2++;
        }
    }
    return res;
}




