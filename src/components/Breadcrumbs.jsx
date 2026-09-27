import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ pageName = '', parentName = '', parentLink = '' }) {
  return (
    <div className="breadcrumb-container">
      <nav>
        <ol className="breadcrumb" id="app-breadcrumbs">
          {pageName === 'Home' || !pageName ? (
            <li className="current">Home</li>
          ) : parentName === 'Markets' ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="separator">›</li>
              <li>
                <Link to="/#markets">Markets</Link>
              </li>
              <li className="separator">›</li>
              <li className="current">{pageName}</li>
            </>
          ) : parentName === 'Login' ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="separator">›</li>
              <li>
                <Link to="/login.html">Login</Link>
              </li>
              <li className="separator">›</li>
              <li className="current">{pageName}</li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="separator">›</li>
              <li className="current">{pageName}</li>
            </>
          )}
        </ol>
      </nav>
    </div>
  );
}
