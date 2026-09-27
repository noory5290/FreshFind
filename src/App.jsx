import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Produce from './pages/Produce';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chatbot from './pages/Chatbot';

import NorthKarachi from './pages/NorthKarachi';
import Gulshan from './pages/Gulshan';
import DhaKarachi from './pages/DhaKarachi';
import Clifton from './pages/Clifton';
import Pechs from './pages/Pechs';
import Malir from './pages/Malir';
import Nazimabad from './pages/Nazimabad';
import Korangi from './pages/Korangi';

import './styles/visitor.css';
import './styles/pagepath.css';
import './styles/navbar.css';
import './styles/footer.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/about.html" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />

        <Route path="/produce" element={<Produce />} />
        <Route path="/produce.html" element={<Produce />} />

        <Route path="/login" element={<Login />} />
        <Route path="/login.html" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signup.html" element={<Signup />} />

        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chatbot.html" element={<Chatbot />} />

        {/* Market Pages */}
        <Route path="/north-karachi" element={<NorthKarachi />} />
        <Route path="/north-karachi.html" element={<NorthKarachi />} />

        <Route path="/gulshan" element={<Gulshan />} />
        <Route path="/gulshan.html" element={<Gulshan />} />

        <Route path="/dha-karachi" element={<DhaKarachi />} />
        <Route path="/dha-karachi.html" element={<DhaKarachi />} />

        <Route path="/clifton" element={<Clifton />} />
        <Route path="/clifton.html" element={<Clifton />} />

        <Route path="/pechs" element={<Pechs />} />
        <Route path="/pechs.html" element={<Pechs />} />

        <Route path="/malir" element={<Malir />} />
        <Route path="/malir.html" element={<Malir />} />

        <Route path="/nazimabad" element={<Nazimabad />} />
        <Route path="/nazimabad.html" element={<Nazimabad />} />

        <Route path="/korangi" element={<Korangi />} />
        <Route path="/korangi.html" element={<Korangi />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
