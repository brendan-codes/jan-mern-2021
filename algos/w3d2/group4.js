// Challenge #1: findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// Object.hasOwnProperty()
// Object.keys(instance)
// functional (.map .filter)
function findObjectsFilter(search, items) {
    //array of key names
    let arrayOfKeys = Object.keys(search);
    //does items have these properties?
    for (var i = 0; i < arrayOfKeys.length; i++) {
        items = items.filter(item => item[arrayOfKeys[i]] == search[arrayOfKeys[i]]);
    }
    return items;
}

console.log(findObjectsFilter(searchFor, items));


// Challenge #2: findByIdAndUpdate(id, updateObject, arr)

//  Given an id, an object that has keys with corresponding updated values, and an array of objects

//  Find the object by "id" key that matches the given id value and then update that object's
//  keys with the provided new values.

// Return the updated object, or null if no object was found


const students = [{
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];


// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null

function findByIdAndUpdate(id, updatedVals, collection) {
    let updated = false;
//filter by id to find object
    for(let i=0; i<collection.length; i++){
        if(collection[i].id == id){
            for (const [key, value] of Object.entries(updatedVals)) {
                if (collection[i].hasOwnProperty(key)) {
                    collection[i][key] = value;
                    updated = true;
                }
            }
        }
    }
    if (updated) {
        return collection;
    } else {
        return null;
    }
//check if obj has the properties of updatedVals
    //
//if it has the same key; update it
//if no updates are made, return null
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));

// Object.hasOwnProperty
// Object.keys(instance)
// functional (.map, .filter)

