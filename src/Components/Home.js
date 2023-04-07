import React from "react";
import "./Home.css";
import imga from './home_img.png'
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={imga} alt="banner" className="home__img"/>
      </div>
    </div>
  );
};

export default Home;
