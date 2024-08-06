# Python vs JavaScript Syntax Comparison

## Variables

**Python:**

```python
x = 10
y = "Hello"
z = [1, 2, 3]
```

**JavaScript:**

```javascript
let x = 10;
let y = "Hello";
let z = [1, 2, 3];
```

## Functions

**Python:**

```python
def add(a, b):
    return a + b

result = add(2, 3)
```

**JavaScript:**

```javascript
function add(a, b) {
    return a + b;
}

let result = add(2, 3);
```

## Conditional Statements

**Python:**

```python
x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")
```

**JavaScript:**

```javascript
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}
```

## Loops

**Python:**

```python
for i in range(5):
    print(i)

i = 0
while i < 5:
    print(i)
    i += 1
```

**JavaScript:**

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Lists/Arrays

**Python:**

```python
numbers = [1, 2, 3, 4, 5]
print(numbers[0])  # Access first element
numbers.append(6)  # Add an element
```

**JavaScript:**

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);  // Access first element
numbers.push(6);  // Add an element
```

## Dictionaries/Objects

**Python:**

```python
student = {
    "name": "Alice",
    "age": 21,
    "major": "Computer Science"
}
print(student["name"])
student["age"] = 22
```

**JavaScript:**

```javascript
let student = {
    name: "Alice",
    age: 21,
    major: "Computer Science"
};
console.log(student.name);
student.age = 22;
```

## List/Array Comprehensions

**Python:**

```python
squares = [x ** 2 for x in range(10)]
```

**JavaScript:**

```javascript
let squares = Array.from({ length: 10 }, (v, k) => k * k);
```

## String Formatting

**Python:**

```python
name = "Alice"
greeting = f"Hello, {name}!"
```

**JavaScript:**

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;
```

## Importing Modules

**Python:**

```python
import math
print(math.sqrt(16))
```

**JavaScript:**

```javascript
import { sqrt } from 'mathjs';
console.log(sqrt(16));
```

## Error Handling

**Python:**

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

**JavaScript:**

```javascript
try {
    let result = 10 / 0;
} catch (error) {
    console.log("Cannot divide by zero");
}
```

## DOM Manipulation

**JavaScript Only:**

```javascript
// Select an element
let element = document.getElementById("myElement");

// Change content
element.innerText = "New content";

// Add an event listener
element.addEventListener("click", function() {
    alert("Element clicked!");
});
```

## Comments

**Python:**

```python
# This is a single-line comment

"""
This is a
multi-line comment
"""
```

**JavaScript:**

```javascript
// This is a single-line comment

/*
This is a
multi-line comment
*/
```

## File Structure

**Python:**

```plaintext
my_project/
│
├── main.py
├── module.py
└── README.md
```

**JavaScript:**

```plaintext
my_project/
│
├── index.html
├── script.js
└── style.css
```

## Exercise 1: Print Hello World

**Python:**

```python
print("Hello, World!")
```

**JavaScript:**

```javascript
console.log("Hello, World!");
```

## Exercise 2: Add Two Numbers

**Python:**

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)
```

**JavaScript:**

```javascript
function add(a, b) {
    return a + b;
}

let result = add(2, 3);
console.log(result);
```

## Exercise 3: Check If Number Is Even or Odd

**Python:**

```python
number = 5
if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

**JavaScript:**

```javascript
let number = 5;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

## Exercise 4: Loop Through a List/Array

**Python:**

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

**JavaScript:**

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

## Exercise 5: Define and Use a Dictionary/Object

**Python:**

```python
student = {
    "name": "Alice",
    "age": 21,
    "major": "Computer Science"
}
print(student["name"])
```

**JavaScript:**

```javascript
let student = {
    name: "Alice",
    age: 21,
    major: "Computer Science"
};
console.log(student.name);
```

## Exercise 6: Calculate the Factorial of a Number

**Python:**

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

result = factorial(5)
print(result)
```

**JavaScript:**

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let result = factorial(5);
console.log(result);
```

## Exercise 7: Reverse a String

**Python:**

```python
def reverse_string(s):
    return s[::-1]

result = reverse_string("hello")
print(result)
```

**JavaScript:**

```javascript
function reverseString(s) {
    return s.split("").reverse().join("");
}

let result = reverseString("hello");
console.log(result);
```

## Exercise 8: Find the Largest Number in a List/Array

**Python:**

```python
numbers = [1, 2, 3, 4, 5]
max_number = max(numbers)
print(max_number)
```

**JavaScript:**

```javascript
let numbers = [1, 2, 3, 4, 5];
let maxNumber = Math.max(...numbers);
console.log(maxNumber);
```

## Exercise 9: Create a Simple Class/Object

**Python:**

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print("Woof!")

dog = Dog("Buddy")
print(dog.name)
dog.bark()
```

**JavaScript:**

```javascript
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log("Woof!");
    }
}

let dog = new Dog("Buddy");
console.log(dog.name);
dog.bark();
```

## Exercise 10: Basic DOM Manipulation (JavaScript Only)

**JavaScript:**

```javascript
// HTML
<!DOCTYPE html>
<html>
<head>
    <title>Basic DOM Manipulation</title>
    <script>
        function changeText() {
            document.getElementById("myParagraph").innerText = "Button Clicked!";
        }
    </script>
</head>
<body>
    <p id="myParagraph">Original Text</p>
    <button onclick="changeText()">Click Me</button>
</body>
</html>
```

## Summary

- **Print Hello World:** Simple print statement.
- **Add Two Numbers:** Basic function to add two numbers.
- **Check If Number Is Even or Odd:** Conditional statements to check even or odd.
- **Loop Through a List/Array:** Loop through elements in a list/array.
- **Define and Use a Dictionary/Object:** Create and access elements in a dictionary/object.
- **Calculate the Factorial of a Number:** Recursive function to calculate factorial.
- **Reverse a String:** Reverse the characters in a string.
- **Find the Largest Number in a List/Array:** Find the maximum number in a list/array.
- **Create a Simple Class/Object:** Define a class and create an object.
- **Basic DOM Manipulation (JavaScript Only):** Change HTML content using JavaScript.
