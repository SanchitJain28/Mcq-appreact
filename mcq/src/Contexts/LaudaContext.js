import React from 'react'
import { createContext, useState } from "react";
import Results from '../Components/Results';

export const myQuestions=createContext("hi")
 
export const LaudaProvider=(props)=>{
const[state,setstate]=useState("hi my name is Sanchit jain")
    return (
        <myQuestions.Provider value={{state,setstate}}>
            {props.children}
        </myQuestions.Provider>
    )
}