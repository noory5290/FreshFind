import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ChatbotButton from '../components/ChatbotButton';
import { produceData } from '../data/produceData';

import '../styles/produce.css';

export default function Produce() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'FreshFind - Produce Guide';
  }, []);

  const filteredProduce =
    activeCategory === 'All'
      ? produceData
      : produceData.filter((item) => item.category === activeCategory);

  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumbs pageName="Produce" />

      {/* Hero */}
      <section className="produce-hero">
        <div className="hero-content">
          <span className="hero-tag">
            <i className="fa-mosaic fa-solid fa-leaf"></i>
            Fresh & Seasonal
          </span>

          <h1>Produce Guide</h1>

          <p>
            Explore fresh fruits, vegetables and herbs available from local farmers markets.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="produce-intro">
        <h2>Discover Fresh Produce</h2>

        <p>
          FreshFind helps you discover seasonal produce and learn more about the fresh products available at local farmers markets.
        </p>
      </section>

      {/* Filter & Grid */}
      <section className="produce-section">
        <div className="produce-filters">
          <button
            type="button"
            className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>

          <button
            type="button"
            className={`filter-btn ${activeCategory === 'Vegetable' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Vegetable')}
          >
            <i className="fa-solid fa-carrot"></i>
            Vegetables
          </button>

          <button
            type="button"
            className={`filter-btn ${activeCategory === 'Fruit' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Fruit')}
          >
            <i className="fa-sharp fa-solid fa-apple-whole"></i>
            Fruits
          </button>

          <button
            type="button"
            className={`filter-btn ${activeCategory === 'Herb' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Herb')}
          >
            <i className="fa-solid fa-leaf"></i>
            Herbs
          </button>
        </div>

        <div id="produceContainer">
          {filteredProduce.map((item) => (
            <div className="produce-card" key={item.name}>
              <div className="produce-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="produce-content">
                <h3>{item.name}</h3>

                <span className="category">{item.category}</span>

                <p>{item.description}</p>

                <p className="season">🌱 Season: {item.season}</p>

                <p className="market-info">📍 {item.market}</p>
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
