// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,11], 16)

// O(n2)

// inputs
// k = 16
// arr = [2,5,3,6,7,0,0,23,11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(arr, k) {
    let answers = [];
    let idx=0;
    for(let i=0; i<arr.length; i++) {
        let sum =[];


    }


    return answers;
}

findConsqSums([2,25,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let ans2 = helper(lst, k, res)
        res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res)
        return res;
    } else if (k < 0) {
        return;
    } else if (k > 0 && lst.length  == 0) {
        return
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}









const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        finalRes.push(res);
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)

    }
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
    return answers;
}

findConsqSums([2,5,3,6,7,0,0,23,11], 16)







const helper = (lst, k, res, finalRes) => {
    if (k == 0) {
        return res;
    } else if (k < 0) {
        return;
    } else {
        let chopped = lst.shift();
        let resWchopped = res.push(chopped)
        let ans1 =  helper(lst, k - chopped, resWchopped);
        let ans2 = helper(lst, k, res)
    }
}