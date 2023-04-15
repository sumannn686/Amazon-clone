import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { Link } from "react-router-dom";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__header">
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Deliver Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Deliver Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Biratnagar-4, Morang</p>
            <p>Koshi, Nepal</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review and Delivery</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
