import React from "react";
import "./Home.css";
import imga from "./home_img.png";
import Product from "./Product";
const Home = (props) => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={imga} alt="banner" className="home__img" />

        <div className="home__row">
          <Product
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – October 16, 2018"
            price="29.99"
            img="https://media.thuprai.com/front_covers/Atomic_Habits.jpg"
            rating={5}
          />
          <Product
            title='SAMSUNG Galaxy Tab A7 Lite 8.7" 32GB WiFi Android Tablet w/ Long Lasting Battery, Compact, Slim Design, Sturdy Metal Frame, US VersonGray'
            price="999"
            img="https://m.media-amazon.com/images/I/819hAP4xoGS._AC_SX466_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title=" Huge sound, dazzling lights and unbelievable power set this speaker apart from the crowd. The JBL PartyBox 310 packs a full party into a transportable, splashproof sound machine like no other."
            price="9999"
            img="https://static-01.daraz.com.np/p/2d02ac0aa2cfe7c61f81fa0472e8c351.png"
            rating={4}
          />
          <Product
            title="
            8GB Unified Memory
            256GB SSD Storage¹
            16-core Neural Engine
            13-inch Retina display with True Tone
            Two Thunderbolt / USB 4 ports
            Magic Keyboard with Touch ID
            Force Touch trackpad
            30W USB-C Power Adapter"
            price="9999"
            img="https://images.indianexpress.com/2022/03/MacbookAirDelayed-1.jpg?w=389"
            rating={4}
          />
          <Product
            title="8GB Unified Memory
           256GB SSD Storage¹
           16-core Neural Engine
           13-inch Retina display with True Tone
           Two Thunderbolt / USB 4 ports
           Magic Keyboard with Touch ID
           Force Touch trackpad
           30W USB-C Power Adapter"
            price="9999"
            img=""
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="8GB Unified Memory
           256GB SSD Storage¹
           16-core Neural Engine
           13-inch Retina display with True Tone
           Two Thunderbolt / USB 4 ports
           Magic Keyboard with Touch ID
           Force Touch trackpad
           30W USB-C Power Adapter"
            price="9999"
            img="https://images.indianexpress.com/2022/03/MacbookAirDelayed-1.jpg?w=389"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
