import { createContext, useState } from "react";
import { auth, gooogleProvider } from '../Config/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { collection, addDoc,getDocs } from "firebase/firestore"; 
import { db } from "../Config/Firebase";

import React from 'react'
export const loginAndData = createContext(undefined);



export function LoginandDatacontext(props) {

  const [personalDetails, setPersonalDetails] = useState(localStorage.getItem("login") == null ? { "username": "Please log in", "photoLink": "https://static.vecteezy.com/system/resources/previews/006/606/705/non_2x/sign-out-logout-icon-in-circle-line-vector.jpg" } : JSON.parse(localStorage.getItem("login")))
  const [endtest, setEndTest] = useState(false)
  const [testTaken,setTestTaken]=useState(false)
  const[data,setData]=useState([])

  const [login, setlogin] = useState(localStorage.getItem("isLogin") == null ? "false" : localStorage.getItem("isLogin"))
  const [loginId, setLoginId] = useState("raand")

  const signinwithgoogle = async () => {
    try {
      const data = await signInWithPopup(auth, gooogleProvider)
      const mypersonalDetails = { "username": data.user.displayName, "photoLink": data.user.photoURL }
      localStorage.setItem("login", JSON.stringify(mypersonalDetails));
      setPersonalDetails(JSON.parse(localStorage.getItem("login")))
      localStorage.setItem("isLogin", "true");
      setlogin(localStorage.getItem("isLogin"))
      setLoginId(data.user.uid)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const addData=async(score,total)=>{
     await addDoc(collection(db, loginId), {
      yourscore: score,
      outoff: total
    });
  }
  const getData=async()=>{
    const querySnapshot = await getDocs(collection(db, loginId));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
setData(querySnapshot)
  }
  return (
    <>
      <loginAndData.Provider value={{ signinwithgoogle, login, setlogin, personalDetails, setPersonalDetails, endtest, setEndTest ,addData,testTaken,setTestTaken,getData}}>
        {props.children}
      </loginAndData.Provider>
    </>
  )
}
