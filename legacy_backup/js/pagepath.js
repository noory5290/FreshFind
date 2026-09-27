function showSection(sectionId) {

    // Hide all sections
    document.querySelectorAll(".view-section")
        .forEach(section => {
            section.classList.add("d-none");
        });

    // Show selected section
    document.getElementById(sectionId)
        .classList.remove("d-none");


    // Page names
    const titles = {
        "home-page": "Home",
        "directory-page": "Directory",
        "details-page": "Market Details",
        "produce-page": "Produce Guide",
        "bookmarks-page": "Saved Items",
        "about-page": "About Us",
        "contact-page": "Contact"
    };


    // Update breadcrumb
    const breadcrumb =
        document.getElementById("app-breadcrumbs");

    breadcrumb.innerHTML = `
        <li>
            <a href="#" onclick="showSection('home-page')">
                Home
            </a>
        </li>
    `;

    if (sectionId !== "home-page") {

        breadcrumb.innerHTML += `
            <li class="active">
                ${titles[sectionId]}
            </li>
        `;
    }

    // Scroll to top
    window.scrollTo(0, 0);
}
