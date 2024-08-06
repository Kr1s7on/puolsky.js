# JavaScript Exercises

## Exercise 1: Variables and Basic Operations

Create variables for a person's name, age, and favorite color. Then, create a sentence using these variables.

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
var name = "Alice";
var age = 25;
var favoriteColor = "blue";

var sentence = "My name is " + name + ", I am " + age + " years old, and my favorite color is " + favoriteColor + ".";
console.log(sentence);
```

</details>

## Exercise 2: Functions and Conditionals

Create a function that takes a person's age as an argument and returns a message based on their age group.

```javascript
function ageGroup(age) {
    // Your code here
}

// Test your function
console.log(ageGroup(15));
console.log(ageGroup(25));
console.log(ageGroup(60));
```

<details>
<summary>Solution</summary>

```javascript
function ageGroup(age) {
    if (age < 18) {
        return "You are a minor.";
    } else if (age >= 18 && age < 65) {
        return "You are an adult.";
    } else {
        return "You are a senior citizen.";
    }
}

console.log(ageGroup(15)); // "You are a minor."
console.log(ageGroup(25)); // "You are an adult."
console.log(ageGroup(60)); // "You are an adult."
```

</details>

## Exercise 3: Arrays and Loops

Create an array of five fruits. Use a loop to print each fruit to the console, along with its index in the array.

```javascript
// Your code here
```

<details>
<summary>Solution</summary>

```javascript
var fruits = ["apple", "banana", "orange", "grape", "kiwi"];

for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit at index " + i + ": " + fruits[i]);
}
```

</details>

## Exercise 4: DOM Manipulation

Create an HTML file with a button and a paragraph. Use JavaScript to change the text of the paragraph when the button is clicked.

```html
<!DOCTYPE html>
<html>
<body>
    <button id="changeText">Click me</button>
    <p id="text">Original text</p>

    <script>
        // Your code here
    </script>
</body>
</html>
```

<details>
<summary>Solution</summary>

```html
<!DOCTYPE html>
<html>
<body>
    <button id="changeText">Click me</button>
    <p id="text">Original text</p>

    <script>
        var button = document.getElementById("changeText");
        var paragraph = document.getElementById("text");

        button.addEventListener("click", function() {
            paragraph.innerHTML = "Text changed!";
        });
    </script>
</body>
</html>
```

</details>

## Exercise 5: Form Validation

Create a simple form with name and email fields. Use JavaScript to validate that both fields are filled out before submitting the form.

```html
<!DOCTYPE html>
<html>
<body>
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>

    <script>
        // Your code here
    </script>
</body>
</html>
```

<details>
<summary>Solution</summary>

```html
<!DOCTYPE html>
<html>
<body>
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>

    <script>
        document.getElementById("myForm").addEventListener("submit", function(event) {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;

            if (name === "" || email === "") {
                alert("Both name and email must be filled out");
                event.preventDefault();
            }
        });
    </script>
</body>
</html>
```

</details>

## Exercise 6: Combining It All

Create a webpage with a form that allows users to add items to a shopping list. The list should be displayed on the page, and users should be able to remove items from the list.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <h1>Shopping List</h1>
    <form id="addItemForm">
        <input type="text" id="newItem" placeholder="Enter item">
        <button type="submit">Add Item</button>
    </form>
    <ul id="shoppingList"></ul>

    <script>
        // Add your JavaScript here
    </script>
</body>
</html>
```

<details>
<summary>Solution</summary>

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .delete-btn {
            margin-left: 10px;
            color: red;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Shopping List</h1>
    <form id="addItemForm">
        <input type="text" id="newItem" placeholder="Enter item">
        <button type="submit">Add Item</button>
    </form>
    <ul id="shoppingList"></ul>

    <script>
        var form = document.getElementById("addItemForm");
        var input = document.getElementById("newItem");
        var list = document.getElementById("shoppingList");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            if (input.value !== "") {
                addItem(input.value);
                input.value = "";
            }
        });

        function addItem(item) {
            var li = document.createElement("li");
            li.textContent = item;
            
            var deleteBtn = document.createElement("span");
            deleteBtn.textContent = "x";
            deleteBtn.className = "delete-btn";
            deleteBtn.onclick = function() {
                list.removeChild(li);
            };
            
            li.appendChild(deleteBtn);
            list.appendChild(li);
        }
    </script>
</body>
</html>
```

</details>
