import React, { useContext, useEffect, useState } from 'react'
import { mycontext } from '../Contexts/ResultContext'
import { Link, useNavigate } from 'react-router-dom'
import { testquestions } from '../Contexts/QuestionContext'
import { loginAndData } from '../Contexts/LoginandDatacontext'
import LogoutButton from './LogoutButton'
import Timer from './Timer'



export default function Questions(props) {
  const navigate = useNavigate();
  const [data,setData]=useState([])
  const result = useContext(mycontext)
  const questions = useContext(testquestions)
  const {getQuestions}=questions
  const logindata = useContext(loginAndData)
  const personalDetails = logindata.personalDetails
  const styleobject = {
    buttonstyleselected: "transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-4 bg-teal-400 rounded-lg text-white w-40 text-2xl ",
    buttonstyleunselected: "transition duration-300 ease-in-out hover:bg-sky-700 m-4 p-4 bg-gray-900 rounded-lg text-white w-40 text-2xl ",
    seeresult: 'font-semibold border border-gray-950 bg-red-400 text-lg hover:bg-sky-700 transition duration-300  m-10 rounded-lg p-8 flex flex-col justify-center align-center'
  }

  function setanswer123(index, solution, option) {
    result.answer[index] = solution
    const clicked = [...result.clickedOption]
    clicked[index] = option
    result.setClickedOption(clicked)
  }
  if (logindata.endtest == true) {
    navigate("/result")
  }
  const getTestQuestions=async()=>{
   const mydata =await getQuestions()
   setData(mydata)
   console.log(mydata)
  }
  useEffect(() => {
    getTestQuestions()
  }, [])
  
  console.log(logindata.personalDetails)
  return (
    <>
      {!logindata.endtest && <>
        <div className={logindata.login == "true" ? "flex flex-row bg-lime-400 h-24 justify-between" : "flex flex-row bg-red-600 h-24 justify-between"}>
          <div className="flex">
            <img src={personalDetails.photoLink} width={"60px"} height={"95px"} className='m-4 rounded-full mr-28' />
            <div className="flex flex-col -ml-24 my-4 ">
              <p className='font-mono text-3xl '>Hi {personalDetails.username}!</p>
              <p className='w-40'>{logindata.login == "true" ? "You have logged in" : "You have logged out"}</p>
            </div>
          </div>
          <Timer />
          <div className=' my-4 mr-4 '>
            {logindata.login == "true" ? <LogoutButton /> : <button className="font-semibold border border-gray-950 bg-red-400 text-lg hover:bg-sky-700 transition duration-300   rounded-lg p-4 flex flex-col justify-center align-center" onClick={logindata.signinwithgoogle}>Login</button>}
          </div>
        </div>

        <div className='flex flex-col justify-center content-center	bg-lime-500 h-full'>
          {data.map((e, index) => {
            return <>
              <div className="flex flex-col justify-center m-8 content-center" key={index}>
                <p className=' text-center text-3xl m-2 font-mono '>Q{index + 1}. {e["question"]}</p>
                <button className={result.clickedOption[index] == "option1" ? styleobject["buttonstyleselected"] : styleobject["buttonstyleunselected"]} onClick={() => { setanswer123(index, e["option1"], "option1") }}>{e["option1"]}</button>
                <button className={result.clickedOption[index] == "option2" ? styleobject["buttonstyleselected"] : styleobject["buttonstyleunselected"]} onClick={() => { setanswer123(index, e["option2"], "option2") }}>{e["option2"]}</button>
                <button className={result.clickedOption[index] == "option3" ? styleobject["buttonstyleselected"] : styleobject["buttonstyleunselected"]} onClick={() => { setanswer123(index, e["option3"], "option3") }}>{e["option3"]}</button>
                <button className={result.clickedOption[index] == "option4" ? styleobject["buttonstyleselected"] : styleobject["buttonstyleunselected"]} onClick={() => { setanswer123(index, e["option4"], "option4") }}>{e["option4"]}</button>
              </div>
            </>
          })}
          <Link className={styleobject["seeresult"]} to="/result" onClick={() => {
            logindata.addData("not done", "not done")
            logindata.setTestTaken(true)
          }}>SEE RESULTS</Link>
        </div></>}
      {logindata.endtest && <>
        <p>The time is over ,Please see the result</p>
        <button onClick={() => {
          logindata.setEndTest(false)
        }}>GIVE THE RETEST</button>
      </>}
    </>
  )
}
