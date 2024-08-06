document.getElementById("myForm").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Both name and email must be filled out!");

        event.preventDefault();
    }
})
