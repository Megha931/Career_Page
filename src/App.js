import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [isBirthday, setIsBirthday] = useState(false);
  const navigate = useNavigate();

  const revealBirthdayMessage = () => {
    setIsBirthday(true);
  };

  const navigateToFlower = () => {
    navigate('/flower'); // Navigate to the image route
  };

  return (
    <div className="app-container">
      {!isBirthday ? (
        <div className="career-page">
          <h1>Welcome to Goloka IT Career Page</h1>
          <p>Find amazing opportunities with Goloka IT.</p>
          <button className="reveal-btn" onClick={navigateToFlower}>
            View Opportunities
          </button>
        </div>
      ) : (
        <div className="birthday-container">
          <h1 className="main-message">Happy Birthday, <span>Sreenija</span>!</h1>
          <p className="sub-message">Wishing you a wonderful day filled with joy and happiness!</p>
          <div className="flowers-container">
            <img className="flower-image" src="/assets/flowers.png" alt="Flower 1" />
            <img className="flower-image" src="/assets/flowers.png" alt="Flower 2" />
            <img className="flower-image" src="/assets/flowers.png" alt="Flower 3" />
          </div>
        </div>
      )}
    </div>
  );
}

function FlowerPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleBoxClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="image-container">
      <img
        className="flower-image"
        src="/assets/flower.webp" // Update with your relative path
        alt="Birthday Flower"
      />
      <div className="message-box-container">
        <div className="clickable-box" onClick={handleBoxClick}>
          <p>Hey birthday girl, open me!</p>
        </div>
        {showMessage && (
          <div className="message-popup">
            <p>
              Happy Birthday, Sreenija! 🎉🎂 I hope you have a wonderful day! May God bless you with shiny eyes and lots of smiles. 😊💖 Enjoy your special day!
            </p>
            <button className="close-button" onClick={() => setShowMessage(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flower" element={<FlowerPage />} />
      </Routes>
    </Router>
  );
}
