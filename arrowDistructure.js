/*
//array destructure
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];
let [num1, num2, num3, num4, num5, ...z] = numbers
console.log(num1);
console.log(num2);
console.log(z);


// swap variables
let a = 10;
b=20;
[a,b] = [b,a]
console.log(a)
console.log(b)


// object destructure
const studentInfo = {
    id : 108,
    fullName : 'Kuddus Begum',
    gpa : 3.96,
    languages : { //neslate object
        nativ:'Bangla',
        beginner : 'English'
    }
}

const {id, fullName, languages} = studentInfo
console.log(id)
console.log(fullName)
console.log(languages)
console.log(languages.nativ)



// destructuring function parameters

const studentInfo = ({ id, fullName }) => {
    console.log(`${id},${fullName}`)
}

const student = {
    id: 109,
    fullName: 'Anisul Islam'
}
studentInfo(student)

// console.log(studentInfo.id)
// console.log(studentInfo.fullName)
// console.log(studentInfo.gpa)




// find(callback, value) return the value of the first element that pass certain condition.

// let numbers = [5,55,14,57,74];
// let firstEvenNumber = numbers.find(x => x%2===0);
// console.log(firstEvenNumber);


let numbers = [5, 55, 14, 57, 74];
const evenNumber = (value, index, array) => {
    if (value % 2 === 0)
        return value;
}
let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber);
console.log(firstEvenNumberIndex);
console.log(firstEvenNumber);


// objecj er dara find use kore dekhi.
const students = [
    {
        id: 201,
        gpa: 2.25
    },
    {
        id: 202,
        gpa: 3.5
    },
    {
        id: 203,
        gpa: 4.5
    },
    {
        id: 204,
        gpa: 4.88
    },
    {
        id: 205,
        gpa: 5
    }
]

console.log(students.find(x => x.gpa > 4));



// startsWith(searchStrind, position) --> check a string starts wirts with another string

// const message = "today is friday";
// console.log(message.startsWith('today', 0));



// endWith(searchString, length) --> chech a string ends with anothr string

// const message = "today is friday";
// console.log(message.endsWith('friday'));




//includes(searchString, position) --> check if a string contains another string 
// const message = "today is friday";
// console.log(message.endsWith('Friday'));



// all these methods are case sensitive

*/