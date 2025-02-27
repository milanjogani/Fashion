// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Navbars from './Component/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from './Component/Catalog.jsx/Catalog';
import Contact from './Component/Contact/Contact';

import Home from './Home';
import Suitcollection from './Component/Collection/Suitcollection';
import Shirtcollection from './Component/Collection/Shirtcollection';
import Jacketcollection from './Component/Collection/Jacketcollection';
import { CartProvider } from './CartProvider ';
import Footer from './Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Auth0Provider } from '@auth0/auth0-react';
import Carttable from './Component/Cart/Carttable';

const App = () => {
  // State to manage the visibility of the cookie consent popup
  const [showPopup, setShowPopup] = useState(true);

  // Check if the user has already accepted cookies from localStorage
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  // Function to handle cookie consent acceptance
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true'); // Store consent in localStorage
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      {/* Cookie Consent Popup */}
      {showPopup && (
        <div className="cookie-popup">
          <div className="cookie-popup-content">
            <h4 className='bg-transparent'>We use cookies to improve your experience. By using this site, you accept our cookie policy.</h4>
            <button className="accept-btn" onClick={acceptCookies}>Accept Cookies</button>
          </div>
        </div>
      )}

      <Auth0Provider
        domain="dev-owreias6fwwi4ygz.us.auth0.com"
        clientId="8up5gGCWHAUCVOImJMh434JWwktHnVp6"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <CartProvider>
          <BrowserRouter>
            <Navbars />
            <Routes>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Carttable />} />
              <Route path="/details/1" element={<Suitcollection />} />
              <Route path="/details/2" element={<Shirtcollection />} />
              <Route path="/details/3" element={<Jacketcollection />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </Auth0Provider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
