import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";
const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only execute when the page is loaded
    auth.onAuthStateChanged((authUser) => {
      //getting DATA from firebase
      console.log("The user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />

          <Route path="/checkout" element={[<Header />, <Checkout />]} />

          <Route path="/payment" element={[<Header />, <Payment />]} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
