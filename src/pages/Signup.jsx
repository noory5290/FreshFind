import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = 'FreshFind - Sign Up';
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    setMessage(`✓ Account created successfully! Welcome ${formData.name}.`);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    });
  };

  return (
    <section className="signup-page">
      <div className="signup-container">
        {/* Left Side */}
        <div className="signup-left">
          <div className="logo">FreshFind</div>

          <div className="left-content">
            <span className="welcome-tag">
              <i className="fa-mosaic fa-solid fa-leaf"></i> Join FreshFind
            </span>

            <h1>Fresh All Along</h1>

            <p>
              Create your FreshFind account and start exploring local farmers
              markets and fresh seasonal produce.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="signup-right">
          <div className="signup-box">
            <h2>Create Account</h2>

            <p className="signup-text">Create your FreshFind account</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <label className="terms">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <span>I agree to the Terms & Conditions</span>
              </label>

              <button type="submit">Create Account</button>

              {message && (
                <p id="signupMessage" style={{ display: 'block' }}>
                  {message}
                </p>
              )}
            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <p className="login-text">
              Already have an account?{' '}
              <Link to="/login.html">Login</Link>
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
