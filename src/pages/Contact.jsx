import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import ChatbotButton from '../components/ChatbotButton';

import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submittedName, setSubmittedName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.title = 'FreshFind - Contact Us';
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(formData.name);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumbs pageName="Contact" />

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="hero-tag">📩 Get In Touch</span>

          <h1>Contact Us</h1>

          <p>
            Have a question or need help? We are here to help you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <h2>Get In Touch With Us</h2>

        <p className="section-intro">
          Contact FreshFind for questions, suggestions or information about local farmers markets.
        </p>

        <div className="contact-info-container">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Our Location</h3>
            <p>Karachi, Pakistan</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p>info@freshfind.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p>+92 300 0000000</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🕐</div>
            <h3>Working Hours</h3>
            <p>
              Monday - Saturday<br />
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-info">
            <span className="form-tag">🌱 FreshFind</span>

            <h2>Send Us a Message</h2>

            <p>
              Fill out the form and send us your question, suggestion or feedback.
            </p>

            <div className="form-info-item">
              <span>✓</span>
              <p>Ask about farmers markets</p>
            </div>

            <div className="form-info-item">
              <span>✓</span>
              <p>Share your feedback</p>
            </div>

            <div className="form-info-item">
              <span>✓</span>
              <p>Ask about fresh produce</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
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

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>

              {showSuccess && (
                <p id="formMessage" style={{ display: 'block' }}>
                  ✓ Thank you {submittedName}! Your message has been received.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-container">
          <div className="faq-card">
            <h3>How can I find a farmers market?</h3>
            <p>
              You can use the Markets section to explore available farmers markets and their locations.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can I explore seasonal produce?</h3>
            <p>
              Yes. Visit the Produce Guide to explore fruits, vegetables and herbs.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can I contact FreshFind for suggestions?</h3>
            <p>
              Yes. You can use the contact form on this page to send your feedback or suggestions.
            </p>
          </div>
        </div>
      </section>

      <ChatbotButton />
      <Footer />
    </>
  );
}
