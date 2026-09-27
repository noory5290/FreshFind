function signupUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("signupMessage");


    if (password !== confirmPassword) {

        message.innerText =
            "❌ Passwords do not match.";

        message.style.display = "block";

        return;
    }


    message.innerText =
        "✓ Account created successfully! Welcome " + name + ".";

    message.style.display = "block";


    document.querySelector("form").reset();

}