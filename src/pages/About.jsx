import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ChatbotButton from '../components/ChatbotButton';

import '../styles/about.css';

export default function About() {
  useEffect(() => {
    document.title = 'FreshFind - About Us';
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumbs pageName="About Us" />

      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="hero-tag">
            <i className="fa-mosaic fa-solid fa-leaf"></i>
            Fresh • Local • Seasonal
          </span>

          <h1>About FreshFind</h1>

          <p>
            Discover local farmers markets and fresh seasonal produce near you.
          </p>
        </div>
      </section>

      {/* About Introduction */}
      <section className="about-intro">
        <div className="about-text">
          <h2>What is FreshFind?</h2>

          <p>
            FreshFind is a web-based platform designed to help people discover nearby farmers markets and explore fresh seasonal produce.
          </p>

          <p>
            Our goal is to make it easier for users to find market locations, operating days, timings and available products in one place.
          </p>

          <p>
            FreshFind brings useful market information together in a simple, modern and user-friendly website.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Fresh vegetables"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-content">
          <span className="section-tag">Our Mission</span>

          <h2>Making Fresh Produce Easier to Find</h2>

          <p>
            FreshFind aims to connect users with local farmers markets by providing useful information about locations, schedules and fresh produce.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>What FreshFind Offers</h2>

        <p className="section-description">
          Explore the main features available on FreshFind.
        </p>

        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h3>Find Markets</h3>
            <p>
              Discover farmers markets and explore their locations and operating information.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-carrot"></i>
            </div>
            <h3>Fresh Produce</h3>
            <p>
              Explore vegetables, fruits and herbs available from local markets.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-mosaic fa-solid fa-leaf"></i>
            </div>
            <h3>Seasonal Guide</h3>
            <p>
              Learn about seasonal produce and discover products that are available during different seasons.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-regular fa-message-dots"></i>
            </div>
            <h3>Chatbot</h3>
            <p>
              Get quick answers to common questions about markets and fresh produce.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2>How FreshFind Works</h2>

        <div className="steps-container">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3>Find a Market</h3>
            <p>
              Search for a farmers market by area or explore the available markets.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3>Explore Produce</h3>
            <p>
              Browse fresh vegetables, fruits and herbs available on FreshFind.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3>Get Market Information</h3>
            <p>
              Check market timings, locations and other useful information.
            </p>
          </div>
        </div>
      </section>

      <ChatbotButton />
      <Footer />
    </>
  );
}
