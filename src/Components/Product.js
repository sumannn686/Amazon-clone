import React from "react";
import "./Product.css";
const Product = (props) => {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
            {
                Array(props.rating)
                .fill()
                .map
                 ((_,i)=>(
                   <span>⭐</span>
                 ))            }
    
          
        </div>
      </div>
      <img
        src={props.img}
        alt="book__images"
        className="bookImage"
      />
      <button className="product_btn">Add to Basket</button>
    </div>
  );
};

export default Product;
