import { createContext } from "react";
import React from 'react'
import { db } from '../Config/Firebase'
import { getDocs, collection } from 'firebase/firestore'

export const testquestions = createContext(true);

export function QuestionContext(props) {
  //REF
  const getQuestions = async () => {
    try {
      const data = await getDocs(collection(db, localStorage.getItem("age")?localStorage.getItem("age"):"Questionofage0to5"))
      const filtereddata = data.docs.map((doc) =>
        ({ ...doc.data() })
      )
      return filtereddata
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <testquestions.Provider value={{getQuestions}}>
      {props.children}
    </testquestions.Provider>
  )
}
