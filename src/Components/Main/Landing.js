import React from 'react'
import '../../Styles/Landing.css';
import Categories from './Categories';

function Landing() {
  const landingVideo = require('../../Assets/Landing-Video.mp4').default;

  return (
    <div className="landing">
      <div className="titleSection">
        <video autoPlay muted loop id='landingVideo'>
          <source src={landingVideo} type='video/mp4'/>
        </video>
        <h1 className="landingTitle">“Through others we become ourselves.”</h1>
      </div>
      <Categories />
    </div>
  );
}

export default Landing;
