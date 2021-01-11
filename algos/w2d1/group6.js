// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

function intersection(arr1, arr2) {
    let x = 0
    let output = []
    if(arr1.length > arr2.length){
      let len = arr1.length;
      let short = arr2[0];
      let long = arr1[0];
    } else {
      let len = arr2.length;
      let short = arr1[0];
      let long = arr2[0];
    }


  for(let i=0; i<len; i++){
    // if(arr2[i] === "undefined"){
    //   pass
    // }
    if(short === long){
      output.push(short)
    }
    if(arr2[i] === arr2[i+1]){
      i++
    }

  }



    while (x < len && y < len) {
      let temp = arr1[x]
      let temp2 = arr2[y]
      let duplicate;
      if(arr1[x] === arr2[y]{
        output.push(arr1[x])
        x++;
        y++;
      }
      if(arr1[x] > arr2[y]){
        y++;
      }
      if(arr1[x] < arr2[y]){
        x++;
      }
      // if(temp === "undefined"){
      //   continue
      // } else
      if(temp in output){
        continue
      } else {
        output[temp] = temp;
      }
      if(temp2 in output){
        continue
      } else {
        output[temp2] = temp2;
      }
      // if(temp2 === "undefined"{
      //   pass
      // })
    }
}

{"1":2,
"2": 2}

    if(arr1.length > arr2.length){
      let len = arr1.length;
      let short = arr2[0];
      let long = arr1[0];
    } else {
      let len = arr2.length;
      let short = arr1[0];
      let long = arr2[0];
    }


  for(let i=0; i<len; i++){
    // if(arr2[i] === "undefined"){
    //   pass
    // }
    if(short === long){
      output.push(short)
    }
    if(arr2[i] === arr2[i+1]){
      i++
    }

  }



    while (x < len && y < len) {
      let temp = arr1[x]
      let temp2 = arr2[y]
      let duplicate;
      if(arr1[x] === arr2[y]{
        output.push(arr1[x])
        x++;
        y++;
      }
      if(arr1[x] > arr2[y]){
        y++;
      }
      if(arr1[x] < arr2[y]){
        x++;
      }
      // if(temp === "undefined"){
      //   continue
      // } else
      if(temp in output){
        continue
      } else {
        output[temp] = temp;
      }
      if(temp2 in output){
        continue
      } else {
        output[temp2] = temp2;
      }
      // if(temp2 === "undefined"{
      //   pass
      // })
    }
}

{"1":2,
"2": 2}

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