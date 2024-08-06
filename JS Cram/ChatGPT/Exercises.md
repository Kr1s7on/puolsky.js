# JavaScript Exercises

## Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Functions](#functions)
3. [Arrays and Objects](#arrays-and-objects)
4. [DOM Manipulation](#dom-manipulation)
5. [HTML/CSS: Navigation](#htmlcss-navigation)
6. [HTML/CSS: Forms](#htmlcss-forms)

## Introduction to JavaScript

### Exercise 1: Basic Syntax

**Task:** Declare a variable called `message` and assign it the string "Hello, World!". Log the variable to the console.

```javascript
// Your code here
```

**Solution:**

```javascript
let message = "Hello, World!";
console.log(message);
```

### Exercise 2: Variables and Operators

**Task:** Declare two variables, `a` and `b`, with values 5 and 10. Compute their sum and store it in a variable called `sum`. Log `sum` to the console.

```javascript
// Your code here
```

**Solution:**

```javascript
let a = 5;
let b = 10;
let sum = a + b;
console.log(sum);
```

### Exercise 3: Control Structures

**Task:** Write an if-else statement that checks if a number stored in a variable `num` is greater than 10. Log "Greater than 10" if true, otherwise log "10 or less".

```javascript
// Your code here
```

**Solution:**

```javascript
let num = 12;

if (num > 10) {
  console.log("Greater than 10");
} else {
  console.log("10 or less");
}
```

## Functions

### Exercise 4: Function Declaration

**Task:** Write a function called `greet` that takes a name as a parameter and logs "Hello, [name]!" to the console. Call the function with the name "Alice".

```javascript
// Your code here
```

**Solution:**

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
```

### Exercise 5: Return Values

**Task:** Write a function called `multiply` that takes two numbers as parameters and returns their product. Call the function with the numbers 4 and 5 and log the result.

```javascript
// Your code here
```

**Solution:**

```javascript
function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);
```

## Arrays and Objects

### Exercise 6: Arrays

**Task:** Declare an array called `colors` with the values "red", "green", and "blue". Add the color "yellow" to the end of the array and log the array.

```javascript
// Your code here
```

**Solution:**

```javascript
let colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors);
```

### Exercise 7: Objects

**Task:** Create an object called `car` with properties `make` (set to "Toyota"), `model` (set to "Corolla"), and `year` (set to 2020). Log the `make` property to the console.

```javascript
// Your code here
```

**Solution:**

```javascript
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.make);
```

## DOM Manipulation

### Exercise 8: Selecting Elements

**Task:** Create a simple HTML file with a button element. Use JavaScript to select the button by its ID and log it to the console.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>DOM Exercise</title>
</head>
<body>
  <button id="myButton">Click me</button>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
// Your code here
```

**Solution:**

```javascript
let button = document.getElementById("myButton");
console.log(button);
```

### Exercise 9: Changing Content

**Task:** Add a paragraph element with the text "Hello" to your HTML file. Use JavaScript to change the text content of the paragraph to "Hello, World!".

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>DOM Exercise</title>
</head>
<body>
  <p id="myParagraph">Hello</p>
  <button id="myButton">Click me</button>
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
// Your code here
```

**Solution:**

```javascript
let paragraph = document.getElementById("myParagraph");
paragraph.textContent = "Hello, World!";
```

## HTML/CSS: Navigation

### Exercise 10: Navigation Bar

**Task:** Create a simple HTML navigation bar with three links: Home, About, and Contact. Style it using CSS to display horizontally.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Navigation Exercise</title>
  <style>
    /* Your CSS here */
  </style>
</head>
<body>
  <!-- Your HTML here -->
</body>
</html>
```

**Solution:**

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Navigation Exercise</title>
  <style>
    nav ul {
      list-style-type: none;
    }
    nav ul li {
      display: inline;
      margin-right: 10px;
    }
    nav ul li a {
      text-decoration: none;
      color: black;
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## HTML/CSS: Forms

### Exercise 11: Simple Form

**Task:** Create a simple HTML form with two input fields (name and email) and a submit button. Use CSS to style the form.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Form Exercise</title>
  <style>
    /* Your CSS here */
  </style>
</head>
<body>
  <!-- Your HTML here -->
</body>
</html>
```

**Solution:**

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Form Exercise</title>
  <style>
    form {
      width: 300px;
      margin: 0 auto;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input[type="text"], input[type="email"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

### Exercise 12: Form Validation

**Task:** Add HTML form validation to the form so that both fields are required.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Form Exercise</title>
  <style>
    /* Your CSS here */
  </style>
</head>
<body>
  <!-- Your HTML here -->
</body>
</html>
```

**Solution:**

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Form Exercise</title>
  <style>
    form {
      width: 300px;
      margin: 0 auto;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input[type="text"], input[type="email"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

---
