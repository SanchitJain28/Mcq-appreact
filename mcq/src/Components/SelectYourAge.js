import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionContext, testquestions } from '../Contexts/QuestionContext'

export default function SelectYourAge() {
    const age=useContext(testquestions)
    const styleobject={
        buttonstyleselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-4 bg-teal-400 rounded-lg text-white w-40 text-2xl ",
        buttonstyleunselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-2 bg-gray-900 rounded-lg text-white w-40 text-2xl ",
        seeresult:'font-semibold border border-gray-950 bg-red-400 text-lg w-40 m-10 rounded-lg p-8 flex flex-col justify-center align-center',
      }
  return (
    <div className="flex flex-col justify-center p-10 bg-lime-500">
        <p className='text-3xl font-mono'>Select Your Age</p>
        <Link className={styleobject["seeresult"]} onClick={(e)=>{localStorage.setItem("age","Questionofage0to5")}} to="/questions" >0 To 5</Link>
        <Link className={styleobject["seeresult"]}  onClick={(e)=>{localStorage.setItem("age","Questionofage6to10")}} to="/questions" >6 To 10</Link>
        <Link className={styleobject["seeresult"]}  onClick={(e)=>{localStorage.setItem("age","Questionofage11to15")}} to="/questions" >11 To 15</Link>
        <Link className={styleobject["seeresult"]}  onClick={(e)=>{localStorage.setItem("age","Questionofage15+")}} to="/questions" >16 +</Link>
    </div>
  )
}
