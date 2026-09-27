function loginUser(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("loginMessage");

    if (email !== "" && password !== "") {

        message.innerText =
            "✓ Login successful! Welcome to FreshFind.";

        message.style.display = "block";

    }

}