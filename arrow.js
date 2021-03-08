/*

// function display1(){
//     console.log("I am display1");
// }

// const display2 = () => {
//     console.log("I am display2");
// }
// display1();
// display2();

// //treditional function
// function message1(){
//     return "Hi I am message 1";
// }
// console.log(message1());

// // arrow function

// // const message2 = () => {
// //     return "HI I am message 2";
// // }
// // console.log(message2());

// //simple way

// const message2 = () => "Hi I Am message 2";
// console.log(message2());


// // how to pass paramiter in arrow function

// // tredition function
// function add1(num1,num2){
//     return num1+num2;
// }
// console.log(add1(20,30));

// //arrow function / arrow function e return use korle 2nd braket use korte hoy na hole noy.
// const add2 = (num1, num2) => num1 +
// num2;
// console.log(add2(20,30));


// use arrow function search student Id:

var students = [
    {
        id: 101,
        name: 'Amir Hamza',
        cgpa: 2.50
    },
    {
        id: 102,
        name: 'Kuddus Begom',
        cgpa: 3.50
    },
    {
        id: 103,
        name: 'Anisul Islam',
        cgpa: 4.00
    },
    {
        id: 104,
        name: 'Rokibul Islam',
        cgpa: 3.90
    },
    {
        id: 105,
        name: 'Runa Khatun',
        cgpa: 2.99
    },
]

//console.log(students);

// ami dekhte chassi shudu matro students er name dekhabe. 

//treditional function
function studentNames1() {
    return students.filter(function (x) {
        return x.cgpa > 3
    }).map(function(y){
return y.name;
    })
}

//arrow function
const studentNames2 = () => students.filter((x) => x.cgpa>3).map((y) => y.id);


//console.log(studentNames1());
console.log(studentNames2());


*/
