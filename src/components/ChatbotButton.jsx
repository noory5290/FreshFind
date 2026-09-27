import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatbotButton() {
  return (
    <button className="chatbot-button" aria-label="Open Chatbot">
      <Link to="/chatbot.html" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        💬
      </Link>
    </button>
  );
}
