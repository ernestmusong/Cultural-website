import React from 'react';
import banner from '../../hero-image.jpeg';

const Hero = () => (
  <div className="banner mx-auto" style={{ backgroundImage: `url(${banner})` }}>
    <div className="text1-wrapper " style={{ margin: '0 auto', marginBottom: '4rem', paddingTop: '4rem' }}>
      <h1 className="text1">welcome to becuda</h1>
    </div>
  </div>
);

export default Hero;
