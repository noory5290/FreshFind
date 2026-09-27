import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ showItemsFilter = false, onSelectCategory }) {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <img src="/images/freshfindlogo.jpeg" alt="FreshFind" />
          FreshFind
        </Link>
      </div>

      <nav>
        <Link to="/">Home</Link>

        {/* Markets Dropdown */}
        <div className="nav-market">
          <a href="#markets" className="market-link" onClick={(e) => {
            // If already on home page, scroll to markets
            const marketsEl = document.getElementById('markets');
            if (marketsEl) {
              marketsEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Markets ▾
          </a>

          <div className="market-dropdown">
            <Link to="/north-karachi.html">North Karachi</Link>
            <Link to="/gulshan.html">Gulshan-e-Iqbal</Link>
            <Link to="/dha-karachi.html">DHA Karachi</Link>
            <Link to="/clifton.html">Clifton</Link>
            <Link to="/pechs.html">PECHS</Link>
            <Link to="/malir.html">Malir</Link>
            <Link to="/nazimabad.html">Nazimabad</Link>
            <Link to="/korangi.html">Korangi</Link>
          </div>
        </div>

        {/* Optional on Market Pages: Items Dropdown */}
        {showItemsFilter && (
          <div className="nav-items">
            <span className="items-link" style={{ cursor: 'pointer' }}>
              Items ▾
            </span>

            <div className="items-dropdown">
              <a
                href="javascript:void(0)"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelectCategory) onSelectCategory('Vegetable');
                }}
              >
                <i className="fa-solid fa-carrot"></i> Vegetables
              </a>

              <a
                href="javascript:void(0)"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelectCategory) onSelectCategory('Fruit');
                }}
              >
                <i className="fa-sharp fa-solid fa-apple-whole"></i> Fruits
              </a>

              <a
                href="javascript:void(0)"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelectCategory) onSelectCategory('Herb');
                }}
              >
                <i className="fa-solid fa-leaf"></i> Herbs
              </a>
            </div>
          </div>
        )}

        <Link to="/produce.html">Produce</Link>
        <Link to="/about.html">About Us</Link>
        <Link to="/contact.html">Contact</Link>

        {!showItemsFilter && (
          <Link to="/login.html" className="login-btn">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
