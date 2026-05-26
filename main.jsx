import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="overlay"></div>
        <div className="heroContent">
          <p className="eyebrow">Houston Performance Builds</p>
          <h1>Mejia Built Performance</h1>
          <p className="tagline">No Lift. No Excuses.</p>
          <div className="buttons">
            <a href="#services" className="btn primary">View Services</a>
            <a href="#contact" className="btn secondary">Book a Build</a>
          </div>
        </div>
      </section>

      <section className="section about">
        <div>
          <h2>Built Different</h2>
          <p>
            From late nights in the garage to street-ready performance setups,
            MBP is for racers, roll-racing addicts, and anyone chasing real power.
          </p>
          <p>
            FBO setups, cam packages, exhaust work, and performance installs —
            done with pride and built to stand out.
          </p>
        </div>
        <div className="card statCard">
          <h3>MBP</h3>
          <p>Street builds. Clean installs. Real chop.</p>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid">
          <div className="card">
            <h3>FBO Installs</h3>
            <p>Headers, intake, exhaust, E85-ready upgrades, and bolt-on packages.</p>
          </div>
          <div className="card">
            <h3>Cam Packages</h3>
            <p>Aggressive street cam setups with the sound and performance to match.</p>
          </div>
          <div className="card">
            <h3>Performance Builds</h3>
            <p>Street, roll-racing, and cash-days style setups built with purpose.</p>
          </div>
        </div>
      </section>

      <section className="section merch">
        <h2>Merch Coming Soon</h2>
        <p>Hoodies, shirts, banners, and slap stickers for the MBP crew.</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Ready For Your Build?</h2>
        <p>Message MBP to lock in installs, merch, or custom performance work.</p>
        <a className="btn primary" href="https://instagram.com/" target="_blank">Hit Us On Instagram</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
