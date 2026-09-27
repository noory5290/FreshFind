// ========================================
// BREADCRUMB JAVASCRIPT
// ========================================

function updateBreadcrumb() {

    let breadcrumb = document.getElementById("app-breadcrumbs");

    if (!breadcrumb) return;


    // Current page ka naam lena
    let currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    let pageName = "";
    let parentName = "";
    let parentLink = "";


    // ========================================
    // HOME
    // ========================================

    if (currentPage === "" || currentPage === "index.html") {

        breadcrumb.innerHTML = `
            <li class="current">
                Home
            </li>
        `;

        return;
    }


    // ========================================
    // MARKET PAGES
    // ========================================

    if (currentPage === "north-karachi.html") {

        pageName = "North Karachi";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }

    else if (currentPage === "gulshan.html") {

        pageName = "Gulshan-e-Iqbal";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }

    else if (currentPage === "dha-karachi.html") {

        pageName = "DHA Karachi";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }

    else if (currentPage === "clifton.html") {

        pageName = "Clifton";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }

    else if (currentPage === "pechs.html") {

        pageName = "PECHS";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }

    else if (currentPage === "malir.html") {

        pageName = "Malir";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }

    else if (currentPage === "nazimabad.html") {

        pageName = "Nazimabad";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }

    else if (currentPage === "korangi.html") {

        pageName = "Korangi";
        parentName = "Markets";
        parentLink = "index.html#markets";

    }


    // ========================================
    // OTHER PAGES
    // ========================================

    else if (currentPage === "produce.html") {

        pageName = "Produce";

    }

    else if (currentPage === "about.html") {

        pageName = "About Us";

    }

    else if (currentPage === "contact.html") {

        pageName = "Contact";

    }

    else if (currentPage === "login.html") {

        pageName = "Login";

    }

    else if (currentPage === "signup.html") {

        pageName = "Sign Up";
        parentName = "Login";
        parentLink = "login.html";

    }

    else if (currentPage === "chatbot.html") {

        pageName = "Chatbot";

    }


    // ========================================
    // MARKET BREADCRUMB
    // Home > Markets > Market Name
    // ========================================

    if (parentName === "Markets") {

        breadcrumb.innerHTML = `

            <li>
                <a href="index.html">
                    Home
                </a>
            </li>

            <li class="separator">
                ›
            </li>

            <li>
                <a href="${parentLink}">
                    Markets
                </a>
            </li>

            <li class="separator">
                ›
            </li>

            <li class="current">
                ${pageName}
            </li>

        `;

    }


    // ========================================
    // SIGNUP BREADCRUMB
    // Home > Login > Sign Up
    // ========================================

    else if (parentName === "Login") {

        breadcrumb.innerHTML = `

            <li>
                <a href="index.html">
                    Home
                </a>
            </li>

            <li class="separator">
                ›
            </li>

            <li>
                <a href="login.html">
                    Login
                </a>
            </li>

            <li class="separator">
                ›
            </li>

            <li class="current">
                ${pageName}
            </li>

        `;

    }


    // ========================================
    // NORMAL PAGES
    // Home > Page Name
    // ========================================

    else if (pageName !== "") {

        breadcrumb.innerHTML = `

            <li>
                <a href="index.html">
                    Home
                </a>
            </li>

            <li class="separator">
                ›
            </li>

            <li class="current">
                ${pageName}
            </li>

        `;

    }

}


// ========================================
// PAGE LOAD PAR BREADCRUMB START
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateBreadcrumb();

    }
);

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("en-PK", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

updateClock();
setInterval(updateClock, 1000);