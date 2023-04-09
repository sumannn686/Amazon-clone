import React from 'react'
import './CheckoutProduct.css'
const CheckoutProduct = ({id, img, title, price, rating}) => {
  return (
    <div className='checkoutProduct'>
        
        <img  src={img} alt='product' className='checkoutProduct__image'/>

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>

            {
                Array(rating)
                .fill()
                .map
                 ((_,i)=>(
                   <span>⭐</span>
                 ))            }
            </div>
            <button className='remove__btn'>Remove from basket</button>

        </div>
    </div>
  )
}

export default CheckoutProduct