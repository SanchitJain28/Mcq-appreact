import { createContext, useContext, useState } from "react";
import React from 'react'
import { testquestions } from "./QuestionContext";

export const mycontext=createContext(null)

export function ResultContext(props) {
    const[answer,setanswer]=useState([])
    const[clickedOption,setClickedOption]=useState([])
  return (
    <mycontext.Provider value={{answer,setanswer,clickedOption,setClickedOption}}>
        {props.children}
    </mycontext.Provider>
  )
}
