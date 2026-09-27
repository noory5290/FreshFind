function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let message = document.getElementById("formMessage");

    message.innerText =
        "✓ Thank you " + name + "! Your message has been received.";

    message.style.display = "block";

    document.querySelector("form").reset();

}