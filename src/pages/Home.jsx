import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ChatbotButton from '../components/ChatbotButton';
import { markets } from '../data/marketsData';

import '../styles/style.css';
import '../styles/marketscards.css';
import '../styles/searcharea.css';

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [filteredMarkets, setFilteredMarkets] = useState(markets);

  useEffect(() => {
    document.title = 'FreshFind - Fresh All Along';
  }, []);

  const findNearbyMarkets = () => {
    setFilteredMarkets(markets);
    const element = document.getElementById('markets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/farmers+market+near+me', '_blank');
  };

  const handleSearch = (valueToSearch = searchTerm) => {
    const val = valueToSearch.toLowerCase().trim();
    if (!val) {
      setFilteredMarkets(markets);
      return;
    }
    const filtered = markets.filter((market) => {
      const cardText = `${market.name} ${market.location} ${market.description} ${market.days} ${market.time}`.toLowerCase();
      return cardText.includes(val);
    });
    setFilteredMarkets(filtered);
  };

  const selectArea = (area) => {
    setSearchTerm(area);
    setShowAreaDropdown(false);
    handleSearch(area);
  };

  const viewMarket = (location) => {
    const routeMap = {
      'North Karachi': '/north-karachi.html',
      'Gulshan-e-Iqbal': '/gulshan.html',
      'DHA Karachi': '/dha-karachi.html',
      'Clifton': '/clifton.html',
      'PECHS': '/pechs.html',
      'Malir': '/malir.html',
      'Nazimabad': '/nazimabad.html',
      'Korangi': '/korangi.html'
    };
    if (routeMap[location]) {
      navigate(routeMap[location]);
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumbs pageName="Home" />

      {/* Home Section */}
      <section id="home" className="hero">
        <h1>Fresh All Along</h1>

        <p>
          Discover fresh farmers markets near you and find seasonal local produce.
        </p>

        <div className="hero-buttons">
          <button className="find-btn" onClick={findNearbyMarkets}>
            <i className="fa-solid fa-magnifying-glass"></i>
            Find a Market Near You
          </button>

          <button className="maps-btn" onClick={openGoogleMaps}>
            <i className="fa-regular fa-map"></i>
            Google Maps
          </button>
        </div>
      </section>

      {/* Find Market Section */}
      <section className="find-market">
        <h2>Find a Market</h2>

        <div className="market-search">
          <div
            className="search-box"
            onMouseLeave={() => setShowAreaDropdown(false)}
          >
            <input
              type="text"
              id="areaSearch"
              placeholder="Search market by area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={() => setShowAreaDropdown(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
              }}
            />

            <div
              id="areaList"
              className="area-list"
              style={{ display: showAreaDropdown ? 'block' : 'none' }}
            >
              <div onClick={() => selectArea('North Karachi')}>North Karachi</div>
              <div onClick={() => selectArea('Gulshan-e-Iqbal')}>Gulshan-e-Iqbal</div>
              <div onClick={() => selectArea('DHA Karachi')}>DHA Karachi</div>
              <div onClick={() => selectArea('Clifton')}>Clifton</div>
              <div onClick={() => selectArea('PECHS')}>PECHS</div>
              <div onClick={() => selectArea('Malir')}>Malir</div>
              <div onClick={() => selectArea('Nazimabad')}>Nazimabad</div>
              <div onClick={() => selectArea('Korangi')}>Korangi</div>
            </div>
          </div>

          <button onClick={() => handleSearch()}>Search</button>
        </div>
      </section>

      {/* Market Directory */}
      <section id="markets" className="markets">
        <h2>Market Directory</h2>

        <div id="marketContainer">
          {filteredMarkets.map((market) => (
            <div className="market-card" key={market.name}>
              <img src={market.image} alt={market.name} />

              <div className="market-content">
                <h3>{market.name}</h3>

                <p>📍 {market.location}</p>
                <p>📅 {market.days}</p>
                <p>⏰ {market.time}</p>
                <p>{market.description}</p>

                <p className="distance">
                  📏 {market.distance ? market.distance.toFixed(2) + ' km away' : 'Location not checked'}
                </p>

                <button onClick={() => viewMarket(market.location)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ChatbotButton />
      <Footer />
    </>
  );
}
