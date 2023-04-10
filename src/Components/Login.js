import React from "react";
import './Login.css'
import image from './amazon.png'
const Login = () => {
  return (
    <div className="login">
      <img src={image}
      className="login__image"
      alt="login"
      
      />
    </div>
  );
};

export default Login;
