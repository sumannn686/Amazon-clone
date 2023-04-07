import React from "react";
import "./Header.css";
import image from "../ama.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
  return (
    <div className="header">
      {/*image*/}
      <img src={image} className="header_img" alt="logo" />

      {/*search bar*/}
      
      <div className="header__search">
        <input className="header__search-input" type="text" />
      <SearchIcon className="header__search-icon" />
        
      </div>

       {/*header Nav*/}
       <div   className="header_nav">

        <div className="header__option">
            <span className="header__option-LineOne">Hello</span>
            <span className="header__option-LineTwo">SignIn</span>
        </div>
        <div className="header__option">
        <span className="header__option-LineOne">Return</span>
            <span className="header__option-LineTwo">& Orders</span>
        </div>
        <div className="header__option">
        <span className="header__option-LineOne">Your</span>
            <span className="header__option-LineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__option-LineTwo header__basketCount">0</span>
        </div>

       </div>




    </div>
  );
};

export default Header;
