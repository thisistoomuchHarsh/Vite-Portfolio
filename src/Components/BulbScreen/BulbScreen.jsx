import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';
import './BulbScreen.css';

const BulbScreen = () => {
  const [glow, setGlow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setGlow(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000); // 1s delay for glow effect
  };

  return (
    <div className="bulb-screen">
      <button onClick={handleClick} className={`bulb ${glow ? 'glow' : ''}`}>
        <FaLightbulb size={60} />
      </button>
    </div>
  );
};

export default BulbScreen;
