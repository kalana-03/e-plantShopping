import React from 'react';
import './AboutUs.css';
import heroPlant from './assets/hero-plant-cutout.svg';



function AboutUs({ onGetStartedClick }) {
  return (
    <div className="about-us-container">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="hero-subtitle">Where Green Meets Serenity</p>
          <h1 className="hero-title">Welcome to Paradise Nursery</h1>
          <p className="hero-supporting-copy">
            Lush, healthy plants curated for vibrant homes and productive workspaces.
          </p>

          <button className="hero-get-started-button" onClick={onGetStartedClick}>
            Get Started
          </button>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-plant-glow"></div>
          <img className="hero-plant-image" src={heroPlant} alt="" />
        </div>
      </div>

      <div className="about-story-glass">
        <h2 className="about-story-title">Explore Our Story</h2>
        <p className="about-story-content">
          Paradise Nursery exists to make everyday spaces feel alive. We source high-quality, easy-to-care-for plants that
          improve air quality, lift mood, and bring calm to busy routines.
        </p>
        <p className="about-story-content">
          From first-time plant parents to seasoned collectors, our experts guide you toward the right plant for your light,
          schedule, and style. Every order is packed with care so nature arrives thriving at your doorstep.
        </p>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-line"></span>
        <span className="scroll-text">Explore Our Story</span>
      </div>
    </div>
  );
}

export default AboutUs;
