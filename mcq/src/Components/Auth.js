import React, { useContext } from 'react'
import { auth,gooogleProvider } from '../Config/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { testquestions } from '../Contexts/QuestionContext'
export default function Auth() {

    const login=useContext(testquestions)

    const signinwithgoogle=async()=>{
        try {
            await signInWithPopup(auth,gooogleProvider)
            login.setlogin(true)
        } catch (error) {
            console.log(error)
        }
    }

    const styleobject={
        buttonstyleselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-4 bg-teal-400 rounded-lg text-white w-40 text-2xl ",
        buttonstyleunselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-4 bg-gray-900 rounded-lg text-white w-40 text-2xl ",
        seeresult:'font-semibold border border-gray-950 bg-red-400 text-lg hover:bg-sky-700 transition duration-300  m-10 rounded-lg p-8 flex flex-col justify-center align-center'
      }
  return (
    <>
    <button className={styleobject["seeresult"]} onClick={signinwithgoogle}>Sign in With google</button>
    </>
  )
}
