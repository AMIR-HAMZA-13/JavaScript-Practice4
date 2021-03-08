// for ...of and for...in



 //for of
// const names = ["s1", "s2","s3"]
// for(let name of names){
//     console.log(name);
// }

// for in /  It's works for key.


// let students = {
//     ID : 101,
//     name : `Amir Hamza`,
//     cgpa : 3.92
// }

// for (let x in students){
//     // console.log(x);
//     // console.log(students[x]);
//     console.log(`${x} : ${students[x]}`)  //togather print
// }


// for and forEach function

//for function
// var numbers = [10,20,30,40,50];
// for(var x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }


// forEach function
// var numbers = [10,20,30,40,50];
// numbers.forEach(myFunction)
// function myFunction(x){
//     console.log(x);
// }
    

// // simple way
// var numbers = [10,20,30,40,50];
// numbers.forEach(function(x){
//     console.log(x)
// });

// //forEach দিয়ে ভেলুকে squere করার জন্য যা করতে হবে। ১০,২০,৩০,৪০,৫০ উপরের গুলাকে।

// var numbers = [10,20,30,40,50];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x*x);
// });
// console.log(squareNumbers);


// // forEach use করে ভেলুগুলো সাথে ৫ যোগ করতে হবে।
// var numbers = [10,20,30,40,50];
// numbers.forEach(function(x,index,arr){
//     arr[index] = x+5;
// });
// console.log(numbers);

/*
//map function
//map function use korar fole forEach er kaj aro easy hobe.
var numbers = [10,20,30,40,50];
var squareNumbers = numbers.map(function(x){
    return x*x;
});
console.log(squareNumbers);
console.log(numbers);

//filter function
//filter function দিয়ে নাম্বার বাছাই করা যায়। যেমন: 
var numbers = [22,23,24,2,4,5,6,78,26];
var newNumbers = numbers.filter(function(x){
    return x>10; // এথানে ১০ এর চেয়ে বড় নাম্বারকে প্রিন্ট করবে।
});
console.log(newNumbers);

*/
