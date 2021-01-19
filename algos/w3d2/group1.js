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

// build a new empty list
//loop through our items list and match our search for params against each other
//if all props match then push it to the list
//build an empty array

// searchProps = [];
bobList =[];
let match = false;
//map the entire dictionary for keys/value pairs
items.map((item) =>{

    Object.keys(searchFor).map(prop => {
        if(searchFor[prop] === item[prop]){
        // properties match
            match = true;
        }
        else {
            // don't match
            match = false;
        }
    })
    match && bobList.push(item)
})
return bobList
}
console.log(findObjectsFilter(searchFor, items))
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
    // get student by id
    const student = collection.filter(student => student.id === id)[0];

    // if student not found, return null
    if(!student) {return null}

    // get index of student in db
    const index = collection.indexOf(student)
    console.log("initial", student)

    // see if student has props in updatedVals
    Object.keys(updatedVals).map(prop => {
        if(student.hasOwnProperty(prop)) {
            // if student has props, perform update
            student[prop] = updatedVals[prop]
        }
    })

    // update collection and return updated doc
    collection[index] = student
    console.log(collection)
    return student
}

console.log(findByIdAndUpdate(1, {name: "Pierre"}, students))

// Object.hasOwnProperty
// Object.keys(instance)
// functional (.map, .filter)