// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersect_arrays(arr1, arr2) {
    // place holder arr for matching values
        var common = [];
        var i = 0;
        var j = 0;
      // while i is less than length of arr1 and arr 2
        while (i < arr1.length
               && j < arr2.length)
        {
          // compare values of 2 indexes in 2 arrays
            if (arr1[i] === arr2[j]) {
              // if its not in common then push

              if(){ //check for index of arr in if
                common.push(arr1[i]);
              }
                //common[common.length-1]
                i++;
                j++;
            }
            // increase i
            else if(arr1[i] < arr2[j]) {
                i++;
            }
            // increament j
            else {
                j++;
            }
        }
        // return the placeholder arr
        return common;
    }

    console.log(intersect_arrays([1,2,2,2,7], [2,2,6,6,7]))