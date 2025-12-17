// alert("Welcome to clculator type - + , - , * , / ");
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let operator = prompt("Enter operator (+, -, *, /):");

// if (operator === "+") {
//     result = num1 + num2;
// } 
// else if (operator === "-") 
// {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// }


// if (typeof num1 === "string" || typeof num2 === "string" || operator === Number) {
//     alert("Error: Provide correct inputt.");
//     throw new Error("Invalid input type.");
// }
// alert("Result: " + result);


// document.getElementById("content").innerText = +result;

// let name = "Tasos";
// let CountriestoVisit = ["Andorra", "Iceland", "Hungary", "Latvia","Estonia","Lithuania","Portugal","Slovenia"];

// for (let i = 0; i < CountriestoVisit.length; i++) {
//     console.log(CountriestoVisit[i]);
// }
// document.getElementById("content").innerText =CountriestoVisit[Math.floor(Math.random() * CountriestoVisit.length)];



// 17/12/2025
// Exercise 1: Simple Nested Loops

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log("i is: " + i + ", j is: " + j);
//     }
// }


// // Iterating Over Arrays

// let animals = ["Dog", "Cat", "Elephant", "Parrot", "Tiger"];

// for (let i = 0; i < animals.length; i++) {
//     console.log("Animal at index " + i + ": " + animals[i]);
// }

// //Reverse Iteration

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log("Animal at index " + i + ": " + animals[i]);
// }


// Exercise 3: Standard For Loops
// Counting from 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log("the value of i is: " + i);
//     for (let j = 1; j <= 20; j += 2) {
//         console.log("the value of j is: " + j);
//     }
//     for(let k = 100; k>=0; k-=10){
//         console.log("the value of k is: " + k); 
//     }
//     for(let m=10; m<=1000; m*=10){
//         console.log("the value of m is: " + m); 
//     }
// }


// 1. Write a for loop to print the following pattern:
// *
// **
// ***
// ****
// *****
// 2. Modify your code to accept user input (e.g., number of rows) and generate the pattern.

// star = "";
// for(let i=1; i<=5; i++){
//     prompt("Enter #: " );
// star = star + "*";
// console.log(star);
// }

// const cart=[
//     "apple",
//     "banana",
//     "orange",
//     "grape",
//     "mango"
// ]

// for(let i=1; i<=5; i++){
//     if (cart["orange"] = true){
//         console.log("Found orange in the cart!");
//     }
// }

// Sum of Numbers

// total = 0;
// for(let i=1; i<=2; i++){
//     let num = Number(prompt("Enter a number: "));
//     total += num; // total = total + i
//     console.log("Current total: " + total); 
// }

// const items = [
//     {name:"iphone", price:999, quantity:2},
//     {name:"samsung", price:899, quantity:3},
//     {name:"iphone pro", price:799, quantity:5},
//     {name:"iovo pro", price:799, quantity:5},
//     {name:"ier", price:799, quantity:5},
//     {name:"oneplus", price:699, quantity:4}
// ];

// // Ask user for input
// const searchTerm = prompt("Enter the product name to search for:");

// // Loop through items and check if name starts with input
// for (let i = 0; i < items.length; i++) {
//     if (items[i].name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
//         console.log(items[i].name);
//     }
// }



// Sum of Numbers
// 1. Write a program using a for loop to calculate the sum of all numbers from 1 to a
// user-input value (e.g., 1 to N).
// 2. Add a while loop version of the same task for comparison.

// Data Search
// 1. Use a for loop to search for a specific number in a list. Example list:
// numbers = [10, 20, 30, 40, 50, 60]
// ○ Prompt the user for a number to search.
// ○ Print a message if the number is found or not.
// 2. Convert the above logic into a while loop version.

// const numbers = [10, 20, 30, 40, 50, 60];

// // Ask the user once
// const answer = Number(prompt("Search a number:"));

// let found = false; // flag to track if number is found

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === answer) {
//         found = true;
//         break; // stop loop once found
//     }
// }

// if (found) {
//     console.log("This number exists!");
// } else {
//     console.log("This number does not exist.");
// }







// Grading System
// Write a program that takes a student's marks as input and displays their grade:
// ● 90 and above: "A"
// ● 80 to 89: "B"
// ● 70 to 79: "C"
// ● Below 70: "Fail"

const grade = Number(prompt("Enter your grade"));

if(grade >= 90){
    console.log("A");
    
}

if(grade >80 && grade <90){
    console.log("B");
}

if(grade >=70 && grade <80){
    console.log("C");
}

if(grade<70 ){
    console.log("Fail")
}



