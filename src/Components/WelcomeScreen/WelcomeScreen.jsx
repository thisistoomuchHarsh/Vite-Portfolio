import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setOpen(true);
    setTimeout(() => {
      navigate("/bulb");
    }, 1500);
  };

  return (
    <div className="welcome-screen">
      {/* Top Door with h1 */}
      <div className={`door top-door ${open ? 'open' : ''}`}>
        <h1>Every great story begins in the dark.</h1>
      </div>

      {/* Bottom Door with h2 + Button */}
      <div className={`door bottom-door ${open ? 'open' : ''}`}>
        <h2>Switch on the lights once you enter.</h2>
        <button onClick={handleEnter}>Enter</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
