function showAreaList() {
    document.getElementById("areaList").style.display = "block";
}

function selectArea(area) {

    document.getElementById("areaSearch").value = area;

    document.getElementById("areaList").style.display = "none";

    searchArea();
}

function searchArea() {

    let searchValue = document
        .getElementById("areaSearch")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".market-card");

    cards.forEach(function(card, index) {

        if (index < 8) {

            let cardText = card.innerText.toLowerCase();

            if (cardText.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        }
    });
}

function hideAreaList() {
    document.getElementById("areaList").style.display = "none";
}

