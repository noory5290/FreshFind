import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = 'FreshFind - Login';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      setMessage('✓ Login successful! Welcome to FreshFind.');
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">
        {/* Left Side */}
        <div className="login-left">
          <div className="logo">FreshFind</div>

          <div className="left-content">
            <span className="welcome-tag">Welcome Back</span>

            <h1>Fresh All Along</h1>

            <p>
              Login to explore fresh farmers markets, seasonal produce and more.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <div className="login-box">
            <h2>Login</h2>

            <p className="login-text">Login to your FreshFind account</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="login-options">
                <label className="remember">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember Me
                </label>

                <a href="#forgot" onClick={(e) => e.preventDefault()}>
                  Forgot Password?
                </a>
              </div>

              <button type="submit">Login</button>

              {message && (
                <p id="loginMessage" style={{ display: 'block' }}>
                  {message}
                </p>
              )}
            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <p className="signup-text">
              Don't have an account?{' '}
              <Link to="/signup.html">Sign Up</Link>
            </p>

            <Link to="/" className="back-home">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
