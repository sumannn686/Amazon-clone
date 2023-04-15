import React from "react";
import "./Header.css";
import image from "../ama.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignAuth=()=>{
    //signing out from the firebase
   if (user){
    auth.signOut()
   }
  }
  return (
    <div className="header">
      {/*image*/}
      <Link to="/">
        <img src={image} className="header_img" alt="logo" />
      </Link>
      {/*search bar*/}

      <div className="header__search">
        <input className="header__search-input" type="text" />
        <SearchIcon className="header__search-icon" />
      </div>

      {/*header Nav*/}
      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div className="header__option" onClick={handleSignAuth}>
            <span className="header__option-LineOne">Hello {!user?" Guest":user.email.split("@")[0]}</span>
            <span className="header__option-LineTwo">
              {user?"Sign Out ":"Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option-LineOne">Return</span>
          <span className="header__option-LineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-LineOne">Your</span>
          <span className="header__option-LineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__option-LineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
