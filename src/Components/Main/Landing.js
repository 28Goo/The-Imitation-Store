import React from 'react'
import '../../Styles/Landing.css';
import Categories from './Categories';

function Landing() {
  return (
    <div className="landing">
      <div className="titleSection">
        <h1 className="landingTitle">Tagline</h1>
      </div>
      <Categories />
    </div>
  );
}

export default Landing;
