import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, price, rating, img }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        rating: rating,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
      </div>
      <img src={img} alt="book__images" className="bookImage" />
      <button className="product_btn" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
