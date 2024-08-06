var button = document.getElementById("changeText");

var paragraph = document.getElementById("text");

button.addEventListener("click", function () {
    paragraph.innerHTML = "Text Changed!";
});