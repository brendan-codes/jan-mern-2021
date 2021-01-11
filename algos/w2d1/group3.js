// Intersect Sorted Arrays
//Daniel Havens, Steven, Dakota Newman


// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
  let newArr = [];
  let idx1 = 0;
  let idx2 = 0;
  //if an input array is empty, return empty array
  if (arr1.length <= 0 || arr2.length <= 0){
      return newArr;
  }
  while (arr1.length > 0 && arr2.length>0){
      if (arr1[idx1] < arr2[idx2]){idx1++;}
      else if (arr1[idx1] > arr2[idx2]){idx2++;}
    }else{
      if (newArr[newArr.length-1] !== arr1[idx1]){
          newArr.push(arr1[idx1]);
      }
      idx1++;
      idx2++;
        }
  }
  return newArr;


console.log (intersection(([1,3,6,9],[2,4,5,9]))


function intersection(arr1, arr2)
{
  var newArr = [];
  while( arr1.length > 0 && arr2.length > 0 )
  {
    if      (arr1[0] < arr2[0] ){ arr1.shift(); }
    else if (arr1[0] > arr2[0] ){ arr2.shift(); }
    else
    {
      newArr.push(arr1.shift());
      arr2.shift();
    }
  }

  return newArr;
}

console.log(intersection([1,2,2,2,7], [2,2,6,6,7]))




{
// inputs are always to be sorted
// not the same length
// negative numbers? no
// output has to be sorted? yes
// space constraints (return a new array)
// no speed constraints ( ideal O(n) )
// can the arrays be empty? yes
// can the arrays have floats or doubles? no, alwahys integers
// fail case: empty array
}