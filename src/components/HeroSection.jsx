import React from "react";
import "./HeroSection.css";
import Search from "./Search";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="layer"></div>
      <div className="home-section">
        <h2 className="home-heading heading">
          Unlimited movies, TV <br />
          shows, and more .
        </h2>
        <h2 className="home-heading sub-heading">
          Starts at $6.99. Cancel anytime.
        </h2>
        <h2 className="home-heading minor-heading">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
      </div>
      <Search />
    </div>
  );
};

export default HeroSection;
