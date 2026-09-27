// 12 Markets ka data

let markets = [
  {
    name: "Green Valley Market",
    location: "North Karachi",
    days: "Saturday - Sunday",
    time: "8:00 AM - 2:00 PM",
    description: "Fresh fruits and vegetables available.",
    lat: 24.9946,
    lng: 67.0644,
    image: "images/market/north_karachi.jpg"
  },

  {
    name: "Fresh Garden Market",
    location: "Gulshan-e-Iqbal",
    days: "Friday - Sunday",
    time: "9:00 AM - 3:00 PM",
    description: "Fresh seasonal fruits and vegetables.",
    lat: 24.9207,
    lng: 67.0927,
    image: "images/market/gulshan-mart.png"
  },

  {
    name: "Farm Fresh Market",
    location: "DHA Karachi",
    days: "Saturday",
    time: "8:00 AM - 1:00 PM",
    description: "Local farmers bring fresh produce.",
    lat: 24.8138,
    lng: 67.0300,
    image: "images/market/dha.png"
  },

  {
    name: "City Farmers Market",
    location: "Clifton",
    days: "Sunday",
    time: "9:00 AM - 2:00 PM",
    description: "Fresh local products for families.",
    lat: 24.8138,
    lng: 67.0305,
    image: "images/market/cliftn_mart.jpg"
  },

  {
    name: "Green Basket Market",
    location: "PECHS",
    days: "Saturday - Sunday",
    time: "8:00 AM - 3:00 PM",
    description: "Fresh vegetables, fruits and herbs.",
    lat: 24.8740,
    lng: 67.0610,
    image: "images/market/pechs_mart.jpg"
  },

  {
    name: "Organic Farm Market",
    location: "Malir",
    days: "Friday - Saturday",
    time: "7:00 AM - 1:00 PM",
    description: "Organic and seasonal farm products.",
    lat: 24.8939,
    lng: 67.1890,
    image: "images/market/maliir.png"
  },

  {
    name: "Healthy Harvest Market",
    location: "Nazimabad",
    days: "Sunday",
    time: "8:00 AM - 2:00 PM",
    description: "Healthy fresh food directly from farms.",
    lat: 24.9056,
    lng: 67.0338,
    image: "images/market/nazimabad.png"
  },

  {
    name: "Fresh Corner Market",
    location: "Korangi",
    days: "Saturday",
    time: "9:00 AM - 2:00 PM",
    description: "Fresh fruits, vegetables and herbs.",
    lat: 24.8318,
    lng: 67.1326,
    image: "images/market/korangi.png"
  }
];

// Cards ko HTML me display karna

let marketContainer = document.getElementById("marketContainer");


function displayMarkets(marketList) {

  marketContainer.innerHTML = "";

  marketList.forEach(function (market) {

    let card = document.createElement("div");

    card.classList.add("market-card");

    card.innerHTML = `
            <img src="${market.image}" alt="${market.name}">

            <div class="market-content">

                <h3>${market.name}</h3>

                <p>📍 ${market.location}</p>

                <p>📅 ${market.days}</p>

                <p>⏰ ${market.time}</p>

                <p>${market.description}</p>

                <p class="distance">
                    📏 ${market.distance
        ? market.distance.toFixed(2) + " km away"
        : "Location not checked"}
                </p>

                <button onclick="viewMarket('${market.location}')">
                    View Details
                </button>

            </div>
        `;

    marketContainer.appendChild(card);
  });
}