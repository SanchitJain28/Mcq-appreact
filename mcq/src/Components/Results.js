import React, { useContext, useState,useEffect } from 'react'
import { mycontext } from '../Contexts/ResultContext'
import { myQuestions } from '../Contexts/LaudaContext'
import { testquestions } from '../Contexts/QuestionContext'
import { Link } from 'react-router-dom'
import { loginAndData } from '../Contexts/LoginandDatacontext'
import { db } from '../Config/Firebase'
import { getDocs,collection } from 'firebase/firestore'
import LogoutButton from './LogoutButton'

export default function Results() {

  //CONTEXTS
  const result=useContext(mycontext)
  const question=useContext(testquestions)
  const authandData=useContext(loginAndData)
//STATES
  const [score,setScore]=useState("")
  const[disabled,setDisabled]=useState(false)
  const[status,setStatus]=useState([])
  const[checkQuestion,setCheckQuestion]=useState(new Array(question.displayQuestion.length).fill(''))
  const[googleQuestion,setGoogleQuestion]=useState([])
  const[resultDetails,setResultsDetails]=useState({
    yourscore:"DEFAULT",
    outoff:"DEFAULT"
  })
  const questionCollectionref=collection(db,"Questionofage0to5")
  const isLogin=authandData.login
  const personalDetails=authandData.personalDetails

//STYLING
  const styleobject={
    buttonstyleselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-2 p-2 bg-teal-400 rounded-lg text-white w-40 text-2xl m-auto",
    buttonstyleunselected:"transition duration-300 ease-in-out hover:bg-sky-700 m-2 p-2 bg-gray-900 rounded-lg text-white w-40 text-2xl m-auto",
    seeresult:'font-semibold border border-gray-950 bg-red-400 text-lg w-6/12 m-4 rounded-lg p-8 flex flex-col justify-center align-center'
  }


let answerstatus=[]
  let myscore =0

  //FUNCTIONS
  const checkscore=()=>{
    setTimeout(() => {
      setScore("Calculating Score...")
    }, 1000);
    setTimeout(() => {
      setScore("Calculating Score....")
    }, 3000);
      for(let i=0;i<result.answer.length;i++){
        console.log(result.answer[i])
        console.log(question.displayQuestion[i].answer)
        if(result.answer[i]===question.displayQuestion[i].answer){
          console.log("fickme")
          myscore++
          answerstatus.push(<i class="fa-solid fa-check fa-lg"></i>)
        }
        else {
          answerstatus.push(<i class="fa-solid fa-circle-xmark fa-lg"></i>)
        }
      }
      setStatus(answerstatus)
      console.log(answerstatus)
      setScore(`you made ${myscore} correct answer out of ${question.displayQuestion.length}`)
      setResultsDetails({
        yourscore:myscore,
        outoff:question.displayQuestion.length
      })
      authandData.addData(myscore,question.displayQuestion.length)

      setDisabled(true)
  }
useEffect(() => {
  authandData.getData()
}, [])

 
  return (
    <>
<div className={authandData.login=="true"?"flex flex-row bg-lime-400 h-24 justify-between":"flex flex-row bg-red-600 h-24 justify-between"}>
  <div className="flex">
  <img src={personalDetails.photoLink} width={"60px"} height={"95px"} className='m-4 rounded-full mr-28'/>
  <div className="flex flex-col -ml-24 my-4 ">
<p className='font-mono text-3xl '>Hi {personalDetails.username}!</p>
<p className='w-40'>{authandData.login=="true"?"You have logged in":"You have logged out"}</p>
</div>
  </div>

<div className=' my-4 mr-4 '>
{authandData.login=="true"?<LogoutButton/>:<button className="font-semibold border border-gray-950 bg-red-400 text-lg hover:bg-sky-700 transition duration-300   rounded-lg p-4 flex flex-col justify-center align-center" onClick={authandData.signinwithgoogle}>Login</button>}
</div>
</div>

    {/* <button onClick={getQuestionList} className={styleobject["seeresult"]}>SEE QUESTIONS</button> */}
    <div className="flex flex-col bg-lime-500">
    <p className='text-2xl font-mono p-12'>IQ Mastery App - Results Page

Once you've completed your IQ test, your results are securely stored and can be accessed through the Results Page. To ensure your privacy and the integrity of your personal data, you'll need to log in to view your detailed performance analysis.</p>



<div className="m-8">
{isLogin=="true" && <>
  <button onClick={()=>{
    checkscore()
    console.log(resultDetails)
  } } className={styleobject["seeresult"]} >SEE Results</button>
  <p className='text-4xl font-mono font-semibold'>{score}</p>
</>}
{disabled&&isLogin=="true"&& 
    result.answer.map((e,index)=>{
      return <>
<p className='text-lg font-mono'>Q{index+1} {checkQuestion[index]}. Your answer:-{e} Correct answer:- {question.displayQuestion[index].answer } {status[index]} <button className="font-semibold border border-gray-950 bg-red-400 text-lg w-4   rounded-lg p-4 flex flex-col justify-center align-center" onClick={()=>{
  const seequestion=[...checkQuestion]
  seequestion[index]=question.displayQuestion[index].question
  setCheckQuestion(seequestion)
}}><i className="fa-solid fa-eye fa-sm"></i></button></p> 
      </>
    })}
</div>


    {!(isLogin=="true") && <>
    <p>Please Make a login to see Results</p>
    <button className={styleobject["seeresult"]} onClick={authandData.signinwithgoogle}>Login</button>
    </>}
    </div>
    </>
  )
}
