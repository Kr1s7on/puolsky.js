# JavaScript Basics

## 1. Introduction to JavaScript

JavaScript is a programming language that enables interactive and dynamic content on web pages. It's client-side, meaning it runs in the user's browser.

### Key Points:
- Created in 1995
- Syntax similar to Java, but not related
- Used for form validation, reacting to events, changing HTML content dynamically, and controlling browser windows

### Adding JavaScript to HTML:
```html
<script type="text/javascript">
    // JavaScript code here
</script>
```

You can place scripts in the `<head>` or `<body>` of an HTML document, or in external files.

## 2. Variables and Data Types

### Declaring Variables:
```javascript
var variableName = value;
```

### Data Types:
- String: `var str = "Hello World";`
- Number: `var num = 42;`
- Boolean: `var bool = true;`
- Array: `var arr = [1, 2, 3];`
- Object: `var obj = {name: "John", age: 30};`
- Undefined: `var x;`

## 3. Operators

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical: `&&`, `||`, `!`

## 4. Control Structures

### If-Else:
```javascript
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}
```

### Switch:
```javascript
switch(expression) {
    case x:
        // code
        break;
    case y:
        // code
        break;
    default:
        // code
}
```

### Loops:
```javascript
for (var i = 0; i < 5; i++) {
    // code
}

while (condition) {
    // code
}

do {
    // code
} while (condition);
```

## 5. Functions

### Defining and Calling Functions:
```javascript
function functionName(parameter1, parameter2) {
    // code
    return result;
}

var result = functionName(arg1, arg2);
```

# Advanced JavaScript Concepts

## 1. DOM Manipulation

The Document Object Model (DOM) represents the structure of an HTML document.

### Selecting Elements:
```javascript
var element = document.getElementById("id");
var elements = document.getElementsByClassName("class");
var element = document.querySelector("selector");
```

### Modifying Elements:
```javascript
element.innerHTML = "New content";
element.style.property = "value";
element.setAttribute("attribute", "value");
```

## 2. Events

Events are actions that occur in the browser, like clicks or key presses.

### Adding Event Listeners:
```javascript
element.addEventListener("click", function() {
    // code
});
```

## 3. Arrays and Objects

### Array Methods:
```javascript
var arr = [1, 2, 3];
arr.push(4);  // Adds to end
arr.pop();    // Removes from end
arr.unshift(0);  // Adds to beginning
arr.shift();  // Removes from beginning
```

### Object Properties and Methods:
```javascript
var obj = {
    property: value,
    method: function() {
        // code
    }
};
```

## 4. Timing Events

```javascript
setTimeout(function() {
    // code
}, 1000);  // Runs once after 1000ms

setInterval(function() {
    // code
}, 1000);  // Runs every 1000ms
```

## 5. Form Validation

```javascript
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
```

# HTML/CSS Navigation and Forms

## Navigation

### HTML Structure:
```html
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

### CSS Styling:
```css
nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
}
```

## Forms

### HTML Structure:
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <input type="submit" value="Submit">
</form>
```

### JavaScript Form Validation:
```javascript
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    return true;
}
```

Remember to practice implementing these concepts and try creating small projects that combine multiple aspects. Good luck with your test!