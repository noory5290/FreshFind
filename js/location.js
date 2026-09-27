function openGoogleMaps() {
    window.open(
        "https://www.google.com/maps/search/farmers+market+near+me",
        "_blank"
    );
}

function findNearbyMarkets() {

    let container = document.getElementById("marketContainer");

    if (!container) return;

    // Saare 8 markets index page par show karo
    displayMarkets(markets);

    // Market section tak automatically le jao
    document.getElementById("markets").scrollIntoView({
        behavior: "smooth"
    });

}



function calculateDistance(lat1, lon1, lat2, lon2) {

    let R = 6371;

    let dLat = (lat2 - lat1) * Math.PI / 180;
    let dLon = (lon2 - lon1) * Math.PI / 180;

    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function openMarketMap(lat, lng) {

    let mapURL =
        "https://www.google.com/maps/search/?api=1&query="
        + lat + "," + lng;

    window.open(mapURL, "_blank");
}

function viewMarket(location) {

    if (location === "North Karachi") {
        window.location.href = "north-karachi.html";
    }

    else if (location === "Gulshan-e-Iqbal") {
        window.location.href = "gulshan.html";
    }

    else if (location === "DHA Karachi") {
        window.location.href = "dha-karachi.html";
    }

    else if (location === "Clifton") {
        window.location.href = "clifton.html";
    }

    else if (location === "PECHS") {
        window.location.href = "pechs.html";
    }

    else if (location === "Malir") {
        window.location.href = "malir.html";
    }

    else if (location === "Nazimabad") {
        window.location.href = "nazimabad.html";
    }

    else if (location === "Korangi") {
        window.location.href = "korangi.html";
    }

}