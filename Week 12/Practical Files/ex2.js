"use strict"; // Enable strict mode at the beginning of the script

// var i = 1; // Initialize variable i with value 1
// var j = 2; // Initialize variable j with value 2
// var k = 4; // Initialize variable k with value 4
// var f = 1.0; // Initialize variable f with value 1.0

// // False
// console.log("a) " + (i > j && k > f)); // result of (i > j && k > f)

// // True
// console.log("b) " + (i != j && k != f)); // result of (i != j && k != f)

// // True
// console.log("c) " + (i == 1 || j == 2 || k != 4)); // result of (i == 1 || j == 2 || k != 4)

// // False
// console.log("d) " + (i <= j && j >= k)); // result of (i <= j && j >= k)

// Prompt user for a numerical input
var userInput = prompt("Please enter a number");

// Check if the input is a number
if (isNaN(userInput)) { // If the input is not a number, NaN (Not a Number)
    alert("Please enter a numerical input");
}

else {
    userInput = Number(userInput);

    switch (userInput) {
        case 0:
            alert("You have entered a 0.");
            break; // Exit the switch statement

        case 1:
            alert("The weather today is sunny.");
            break;

        case 2:
            alert("Goodbye!");
            break;

        default: // If the input is not 0, 1, or 2
            alert("Error: Invalid input");
    }
}
