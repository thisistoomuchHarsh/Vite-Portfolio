import "./WelcomeScreen.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../PageWrapper/PageWrapper"

const WelcomeScreen = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setOpen(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <PageWrapper>
      <div className="welcome-screen">
        <div className={`door top-door ${open ? "open" : ""}`}>
          <h1>Every great story begins in the dark.</h1>
        </div>

        <div className={`door bottom-door ${open ? "open" : ""}`}>
          <h2>Switch on the lights once you enter.</h2>
          <button onClick={handleEnter}>Enter</button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WelcomeScreen;
