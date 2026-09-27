import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../styles/chatbot.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! 👋 Welcome to FreshFind. How can I help you today?'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    document.title = 'FreshFind - Chatbot';
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotReply = (message) => {
    const text = message.toLowerCase();

    if (text.includes('hello') || text.includes('hi') || text.includes('salam')) {
      return 'Hello! 👋 How can I help you with FreshFind?';
    }

    if (text.includes('freshfind') || text.includes('what is freshfind')) {
      return 'FreshFind helps you discover nearby farmers markets and fresh seasonal produce.';
    }

    if (text.includes('market') || text.includes('find a market')) {
      return 'You can explore our Market Directory to find markets in North Karachi, Gulshan-e-Iqbal, DHA, Clifton, PECHS, Malir, Nazimabad and Korangi.';
    }

    if (
      text.includes('product') ||
      text.includes('vegetable') ||
      text.includes('fruit') ||
      text.includes('herb')
    ) {
      return 'FreshFind offers information about fresh vegetables, fruits and herbs. You can explore them from the Items menu.';
    }

    if (text.includes('timing') || text.includes('time') || text.includes('open')) {
      return 'Market timings are different for each market. Open the Markets menu and select a market to see its available days and timings.';
    }

    if (text.includes('vegetable')) {
      return 'We have fresh vegetables such as Tomato, Potato, Carrot, Onion, Cucumber, Spinach and many more.';
    }

    if (text.includes('fruit')) {
      return 'We have fruits such as Apple, Banana, Mango, Orange, Strawberry, Watermelon and many more.';
    }

    if (text.includes('herb')) {
      return 'We have herbs such as Mint, Coriander, Parsley, Basil, Rosemary and many more.';
    }

    if (text.includes('contact') || text.includes('email') || text.includes('phone')) {
      return 'You can contact FreshFind through our Contact Us page.';
    }

    if (text.includes('thank') || text.includes('thanks')) {
      return "You're welcome! 🌱 Happy shopping with FreshFind.";
    }

    return "Sorry, I didn't understand that. You can ask me about markets, products, fruits, vegetables, herbs or market timings.";
  };

  const handleSendMessage = (msgToSend = inputVal) => {
    const trimmed = msgToSend.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setInputVal('');

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chat-header">
        <div>
          <h1>FreshFind Chatbot</h1>
          <p>
            Ask us about markets and fresh produce{' '}
            <i className="fa-mosaic fa-solid fa-leaf"></i>
          </p>
        </div>

        <Link to="/" className="back-btn">
          ← Home
        </Link>
      </div>

      <div className="chat-container">
        <div id="chatMessages" className="chat-messages" ref={chatMessagesRef}>
          {messages.map((msg, index) =>
            msg.sender === 'bot' ? (
              <div className="bot-message" key={index}>
                <span className="message-icon">🤖</span>
                <div className="message-text">
                  <strong>FreshFind Bot</strong>
                  <p>{msg.text}</p>
                </div>
              </div>
            ) : (
              <div className="user-message" key={index}>
                <p>{msg.text}</p>
              </div>
            )
          )}
        </div>

        <div className="quick-buttons">
          <button
            type="button"
            onClick={() => handleSendMessage('What is FreshFind?')}
          >
            What is FreshFind?
          </button>

          <button
            type="button"
            onClick={() => handleSendMessage('Find a market')}
          >
            Find a Market
          </button>

          <button
            type="button"
            onClick={() => handleSendMessage('What products are available?')}
          >
            Products
          </button>

          <button
            type="button"
            onClick={() => handleSendMessage('Market timings')}
          >
            Market Timings
          </button>
        </div>

        <div className="chat-input">
          <input
            type="text"
            id="userInput"
            placeholder="Type your message..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button type="button" onClick={() => handleSendMessage()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
