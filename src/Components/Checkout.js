import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png"
          alt="bannar"
          className="amazon_banner"
        />
        <div>
          <h2 className="basket__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
      <Subtotal />
        </div>
    </div>
  );
};

export default Checkout;
