# JavaScript Practical Test Preparation

## Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Functions](#functions)
3. [Arrays and Objects](#arrays-and-objects)
4. [DOM Manipulation](#dom-manipulation)
5. [HTML/CSS: Navigation](#htmlcss-navigation)
6. [HTML/CSS: Forms](#htmlcss-forms)

## Introduction to JavaScript

### Basics

- **JavaScript** is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
- **Syntax**: JavaScript syntax is the set of rules, how JavaScript programs are constructed.
  - Statements: `var`, `let`, `const`
  - Data Types: Numbers, Strings, Arrays, Objects, Booleans, Undefined, Null
  - Comments: `//` for single-line, `/* */` for multi-line

### Variables

- Declared using `var`, `let`, or `const`.

  ```javascript
  var name = "John";
  let age = 30;
  const pi = 3.14;
  ```

### Operators

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`
- Comparison: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- Logical: `&&`, `||`, `!`

### Control Structures

- **If-else statement**:

  ```javascript
  if (condition) {
    // block of code to be executed if the condition is true
  } else {
    // block of code to be executed if the condition is false
  }
  ```

- **Loops**:
  - For Loop:

    ```javascript
    for (let i = 0; i < 5; i++) {
      // code block to be executed
    }
    ```

  - While Loop:

    ```javascript
    while (condition) {
      // code block to be executed
    }
    ```

  - Do-While Loop:

    ```javascript
    do {
      // code block to be executed
    } while (condition);
    ```

## Functions

### Declaration and Invocation

- Function declaration:

  ```javascript
  function myFunction() {
    // code to be executed
  }
  ```

- Function expression:

  ```javascript
  const myFunction = function() {
    // code to be executed
  };
  ```

- Arrow functions:

  ```javascript
  const myFunction = () => {
    // code to be executed
  };
  ```

### Parameters and Return

- Functions can take parameters and return values:

  ```javascript
  function add(a, b) {
    return a + b;
  }
  ```

### Scope

- Local scope: Variables declared within a function.
- Global scope: Variables declared outside any function.

## Arrays and Objects

### Arrays

- Declaration and Initialization:

  ```javascript
  let fruits = ["Apple", "Banana", "Mango"];
  ```

- Accessing elements:

  ```javascript
  let fruit = fruits[0]; // Apple
  ```

- Array methods: `push()`, `pop()`, `shift()`, `unshift()`, `forEach()`, `map()`

  ```javascript
  fruits.push("Orange");
  ```

### Objects

- Declaration and Initialization:

  ```javascript
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  ```

- Accessing properties:

  ```javascript
  let name = person.firstName; // John
  ```

## DOM Manipulation

### Selecting Elements

- `document.getElementById(id)`
- `document.getElementsByClassName(class)`
- `document.getElementsByTagName(tag)`
- `document.querySelector(selector)`
- `document.querySelectorAll(selector)`

### Manipulating Elements

- Change HTML content: `element.innerHTML`
- Change attribute value: `element.setAttribute(attribute, value)`
- Change CSS styles: `element.style.property = value`

### Event Handling

- Add event listener:

  ```javascript
  element.addEventListener("click", function);
  ```

- Example:

  ```javascript
  document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button was clicked!");
  });
  ```

## HTML/CSS: Navigation

### HTML Navigation

- Navigation Bar:

  ```html
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  ```

### CSS Styling

- Basic styling:

  ```css
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
  ```

## HTML/CSS: Forms

### HTML Forms

- Basic structure:

  ```html
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <input type="submit" value="Submit">
  </form>
  ```

### Form Validation

- Basic validation using HTML attributes:

  ```html
  <input type="text" id="name" name="name" required>
  <input type="email" id="email" name="email" required>
  ```

### CSS Styling

- Basic styling:

  ```css
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
  ```

---
