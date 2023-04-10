
import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import image from "./amazon.png";
import {auth}  from "./firebase";
const Login = () => {

  const [email,setEmail]= useState('');
  const [password, setPassword]=  useState('')

  const signIn =(e)=>{
    e.preventDefault()

  }

  //registeration
  const logIn =(e)=>{
   e.preventDefault()

   auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
    console.log(auth)
    })
    .catch(error => alert(error.message))

  }


  return (
    <div className="login">
      <Link to="/">
        <img src={image} className="login__image" alt="login" />
      </Link>

      <div className="login__container">
        <h1 className="signIn__header">Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} 
          onChange={e=>setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input type="password" 
          value={password}
          onChange={e=> setPassword(e.target.value)}
          />

          <button className="signIn-btn"
          type="submit"
          onClick={signIn}
          >SignIn</button>
        </form>

        <p className="termCondition">
          By signing-in you agree to Amazon's Condition of use & sale. Please
          see our Privacy Notice,Our cookies Notice and our intrest Based Ads
        </p>
        <button className="login-btn"
          type="submit"
          onClick={logIn}
        >Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;
