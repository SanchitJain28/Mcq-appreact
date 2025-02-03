import React, { useContext } from 'react'
import { loginAndData } from '../Contexts/LoginandDatacontext'

export default function LogoutButton() {

    const loginanddata=useContext(loginAndData)
    const styleobject={
        buttonstyleselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-4 bg-teal-400 rounded-lg text-white w-40 text-2xl ",
        buttonstyleunselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-4 bg-gray-900 rounded-lg text-white w-40 text-2xl ",
        seeresult:'font-semibold border border-gray-950 bg-red-400 text-lg hover:bg-sky-700 transition duration-300   rounded-lg p-4 flex flex-col justify-center align-center'
      }
  return (
    <button className={styleobject["seeresult"]} onClick={()=>{
      const isLogin=  localStorage.setItem("isLogin","false")
      loginanddata.setlogin(localStorage.getItem("isLogin"))
      loginanddata.setPersonalDetails({"username":"please make a log in","photoLink":"https://cdn3.iconfinder.com/data/icons/internet-36/50/Log_Out-19-512.png"})
    }}>Logout</button>
  )
}
