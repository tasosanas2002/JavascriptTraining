/***********************************************************
 * PART 1: HARD-CODED FUNCTIONS (WHY THIS IS BAD)
 ***********************************************************/

// Always returns the same value
function tenSquared() {
  return 10 * 10;
}

tenSquared(); // 100

// Need a new function for every number
function nineSquared() {
  return 9 * 9;
}

nineSquared(); // 81

function eightSquared() {
  return 8 * 8;
}

eightSquared(); // 64

function oneHundredAndFiveSquared() {
  return 105 * 105;
}

oneHundredAndFiveSquared(); // 11025

// These functions are useless:
// - no inputs
// - no reuse
// - no flexibility



/***********************************************************
 * PART 2: GENERALIZING DATA WITH PARAMETERS
 ***********************************************************/

// Leave the number blank until runtime
function squareNum(num) {
  return num * num;
}

squareNum(10);  // 100
squareNum(9);   // 81
squareNum(8);   // 64
squareNum(105); // 11025

// Same logic, different data
// This is real reuse



/***********************************************************
 * PART 3: COPY ARRAY AND MULTIPLY BY 2 (FIRST VERSION)
 ***********************************************************/

function copyArrayAndMultiplyBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }

  return output;
}

const myArray = [1, 2, 3];
let result = copyArrayAndMultiplyBy2(myArray);

result; // [2, 4, 6]



/***********************************************************
 * PART 4: COPY ARRAY AND DIVIDE BY 2 (ALMOST IDENTICAL)
 ***********************************************************/

function copyArrayAndDivideBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }

  return output;
}

result = copyArrayAndDivideBy2(myArray);

result; // [0.5, 1, 1.5]

// Everything is the same except ONE operation
// This breaks DRY (Don't Repeat Yourself)



/***********************************************************
 * PART 5: WHAT IS ACTUALLY CHANGING?
 ***********************************************************/

// Only this part changes:
// array[i] * 2
// array[i] / 2
// array[i] + 3
// array[i] * 3
// etc...

// So we should leave THIS blank, not the whole function



/***********************************************************
 * PART 6: GENERALIZING THE FUNCTIONALITY
 ***********************************************************/

// This function does NOT know what it will do to each element
function copyArrayAndManipulate(array, instructions) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }

  return output;
}

// "instructions" is a placeholder for a function



/***********************************************************
 * PART 7: THE CALLBACK FUNCTIONS (INSTRUCTIONS)
 ***********************************************************/

function multiplyBy2(input) {
  return input * 2;
}

function divideBy2(input) {
  return input / 2;
}

function add3(input) {
  return input + 3;
}



/***********************************************************
 * PART 8: PASSING FUNCTIONS AS ARGUMENTS
 ***********************************************************/

result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
result; // [2, 4, 6]

result = copyArrayAndManipulate([1, 2, 3], divideBy2);
result; // [0.5, 1, 1.5]

result = copyArrayAndManipulate([1, 2, 3], add3);
result; // [4, 5, 6]

// copyArrayAndManipulate → HIGHER-ORDER FUNCTION
// multiplyBy2 / divideBy2 / add3 → CALLBACK FUNCTIONS



/***********************************************************
 * PART 9: WHAT ACTUALLY HAPPENS INSIDE THE LOOP
 ***********************************************************/

// instructions(array[i])
// becomes:
// multiplyBy2(1)
// multiplyBy2(2)
// multiplyBy2(3)

// Each call creates a new execution context
// The return value replaces the function call



/***********************************************************
 * PART 10: INLINE CALLBACK FUNCTIONS
 ***********************************************************/

result = copyArrayAndManipulate([1, 2, 3], function (num) {
  return num * 2;
});

result; // [2, 4, 6]

// Same thing, shorter syntax
result = copyArrayAndManipulate([1, 2, 3], num => num * 2);



/***********************************************************
 * PART 11: THIS IS WHAT MAP DOES
 ***********************************************************/

[1, 2, 3].map(num => num * 2); // [2, 4, 6]

// You just built Array.prototype.map from scratch



/***********************************************************
 * PART 12: FINAL MENTAL MODEL
 ***********************************************************/

// A callback is a function passed into another function
// so it can decide WHEN and HOW to run it

// Callbacks are "delayed instructions"

function filter(array, callback) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    filter(array[i]);
    if (callback(array[i])) {
      output.push(array[i]);
    }
  }

  return output;
}