import React, { createContext, useContext,useReducer } from "react";
// prepare the data layer
export const StateContext = createContext();


//wrapping our app with data layer
export const StateProvider = ({ reducer, initialState, children})=>(
   <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
   </StateContext.Provider>
)


//pull information with data layer
export const useStateValue =()=> useContext(StateContext);