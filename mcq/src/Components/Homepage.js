import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { loginAndData } from '../Contexts/LoginandDatacontext'
import { db } from '../Config/Firebase'
import { getDocs,collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton'

export default function Homepage() {
  const authandData=useContext(loginAndData)
  const personalDetails=authandData.personalDetails

  const navigate = useNavigate();
  const redirect=()=>{
    // navigate("/questions")
    console.log(authandData.login)
  }
  if(authandData.login=="true"){
    navigate("/age")
  }

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

    <div className="flex flex-col justify-center p-8 font-mono bg-lime-500 h-full">
    <p className='text-4xl m-4'>IQ Mastery App</p>
    <p className='m-4'>The IQ Mastery App is an intuitive and engaging platform designed to challenge and assess your cognitive abilities. Whether you're curious about your intellectual strengths or eager to sharpen your problem-solving skills, this app provides a comprehensive suite of IQ tests that cover a broad range of topics. Each test is carefully curated with a variety of questions, including logical reasoning, pattern recognition, mathematical problems, verbal comprehension, and spatial awareness.</p>
    <p className='m-4'>The app features:

Adaptive Testing: The difficulty of questions adjusts based on your performance, ensuring a personalized testing experience that accurately reflects your cognitive abilities.

Detailed Analytics: After each test, receive a detailed breakdown of your results, highlighting areas of strength and opportunities for improvement.

Progress Tracking: Monitor your IQ score over time, set goals, and see how your cognitive skills develop with consistent practice.

Challenge Mode: Compete with friends or other users in real-time IQ challenges to see who comes out on top.

User-Friendly Interface: The app is designed with a clean and intuitive interface, making it accessible to users of all ages.

IQ Mastery is more than just a test—it's a tool for personal growth, helping you unlock your full intellectual potential. Whether you're preparing for an exam, a job interview, or simply looking to challenge yourself, IQ Mastery offers a fun and insightful way to measure and enhance your intelligence.</p>
          <Link className="hover:bg-sky-700 transition duration-300 bg-red-400 m-4 rounded-lg p-5 flex flex-col justify-center align-center" to="/age" >Start test</Link>
          {!(authandData.login=="true") && <button className="hover:bg-sky-700 transition duration-300 bg-red-400 m-4 rounded-lg p-5 flex flex-col justify-center align-center" onClick={authandData.signinwithgoogle}>Login</button>}
    </div>
    </>
  )
}
