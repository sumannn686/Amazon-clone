import React from "react";
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from "./StateProvider";
import { getTotal } from "./Reducer";
import { useNavigate } from 'react-router-dom';
const Subtotal = () => {
  const navigate = useNavigate()

  const [{basket},dispatch]= useStateValue()
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </p>
          </>
        )}

        decimalScale={2}
        value={getTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className="checkout__btn" onClick={()=>navigate("/payment")}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
