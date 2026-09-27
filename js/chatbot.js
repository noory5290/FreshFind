function sendMessage() {

    let input = document.getElementById("userInput");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);

    input.value = "";

    setTimeout(function() {

        let reply = getBotReply(message);

        addBotMessage(reply);

    }, 500);
}


function addUserMessage(message) {

    let chat = document.getElementById("chatMessages");

    let userDiv = document.createElement("div");

    userDiv.className = "user-message";

    userDiv.innerHTML = `
        <p>${message}</p>
    `;

    chat.appendChild(userDiv);

    chat.scrollTop = chat.scrollHeight;
}


function addBotMessage(message) {

    let chat = document.getElementById("chatMessages");

    let botDiv = document.createElement("div");

    botDiv.className = "bot-message";

    botDiv.innerHTML = `
        <span class="message-icon">🤖</span>

        <div class="message-text">

            <strong>FreshFind Bot</strong>

            <p>${message}</p>

        </div>
    `;

    chat.appendChild(botDiv);

    chat.scrollTop = chat.scrollHeight;
}


function getBotReply(message) {

    let text = message.toLowerCase();


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("salam")
    ) {

        return "Hello! 👋 How can I help you with FreshFind?";

    }


    if (
        text.includes("freshfind") ||
        text.includes("what is freshfind")
    ) {

        return "FreshFind helps you discover nearby farmers markets and fresh seasonal produce.";

    }


    if (
        text.includes("market") ||
        text.includes("find a market")
    ) {

        return "You can explore our Market Directory to find markets in North Karachi, Gulshan-e-Iqbal, DHA, Clifton, PECHS, Malir, Nazimabad and Korangi.";

    }


    if (
        text.includes("product") ||
        text.includes("vegetable") ||
        text.includes("fruit") ||
        text.includes("herb")
    ) {

        return "FreshFind offers information about fresh vegetables, fruits and herbs. You can explore them from the Items menu.";

    }


    if (
        text.includes("timing") ||
        text.includes("time") ||
        text.includes("open")
    ) {

        return "Market timings are different for each market. Open the Markets menu and select a market to see its available days and timings.";

    }


    if (
        text.includes("vegetable")
    ) {

        return "We have fresh vegetables such as Tomato, Potato, Carrot, Onion, Cucumber, Spinach and many more.";

    }


    if (
        text.includes("fruit")
    ) {

        return "We have fruits such as Apple, Banana, Mango, Orange, Strawberry, Watermelon and many more.";

    }


    if (
        text.includes("herb")
    ) {

        return "We have herbs such as Mint, Coriander, Parsley, Basil, Rosemary and many more.";

    }


    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("phone")
    ) {

        return "You can contact FreshFind through our Contact Us page.";

    }


    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 🌱 Happy shopping with FreshFind.";

    }


    return "Sorry, I didn't understand that. You can ask me about markets, products, fruits, vegetables, herbs or market timings.";

}


function quickMessage(message) {

    document.getElementById("userInput").value = message;

    sendMessage();

}


function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}