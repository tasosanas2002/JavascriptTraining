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

let name = "Tasos";
let CountriestoVisit = ["Andorra", "Iceland", "Hungary", "Latvia","Estonia","Lithuania","Portugal","Slovenia"];

for (let i = 0; i < CountriestoVisit.length; i++) {
    console.log(CountriestoVisit[i]);
}
document.getElementById("content").innerText =CountriestoVisit[Math.floor(Math.random() * CountriestoVisit.length)];

