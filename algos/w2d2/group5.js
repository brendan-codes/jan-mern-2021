function findConsqSums(arr,num){
    let idx = 0;
    let finalarray = [];
    for (let idx = 0;idx<arr.length;idx++){
      console.log("IDX:", idx)
      let result = [];
      sum = arr[idx];
      if ((sum < num) && (sum !=num)){
        for (var j = 0; j<arr.length; j++){
          console.log("J:", j)
            let sum = 0;
            console.log("Sum:", sum)
            sum += arr[j];
            if (sum != num){
              // console.log("heyman no dice")
            }
          else {
            result.push(arr[j])
          }
          finalarray.push(result)

        }
      }

      // console.log("Index:", idx);
    }
    return finalarray
  }

  console.log(findConsqSums([2,5,3,6,7,0,0,23,11],16))

  k = 16
  arr = [2,5,3,6,7,0,0,23,11]













