// Challenge #1: findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

// searchFor.hasOwnProperty("firstName") // true / false
// Object.keys(searchFor); // ["firstName", "age"]

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

// ["age", "firstName"]
//   "age",  "firstName"

function findObjectsFilter(search, items) {
    // put all the keys for the search object into an array
    const searchKeys = Object.keys(search);

    // filter the items
    return items.filter(item => {
        // for each item in items
        // for every key in searchKeys
        for (const key of searchKeys) {
            // if the key doesn't exist
            if (!item.hasOwnProperty(key) || item[key] !== search[key]) {
                return false;
            }
        }
        // if the for loop returns no falses, return true
        return true;
    })
}


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
    // separate the keys
    const keys = Object.keys(updatedVals);

    // loop over the collection and look at each document
    for (const item of collection) {
        // match ids
        if (item.id === id) {
            // loop through our keys
            for (const key of keys) {
                // only update keys that exist on the found object
                if (item.hasOwnProperty(key)) {
                    item[key] = updatedVals[key];
                }
            }
            return item;
        }
    }
    // above return didn't run so nothing was found
    return null;
}

// Object.hasOwnProperty
// Object.keys(instance)
// functional (.map, .filter)