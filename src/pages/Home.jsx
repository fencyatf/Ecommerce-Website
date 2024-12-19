import React from 'react';
import banner from '../assets/banner-img.avif'

const Home = () => {
  return (
    <div className="home-page">
      <img className='banner' src={banner} alt="banner-home"/>
    </div>
  );
};

export default Home;
