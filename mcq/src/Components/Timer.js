import React, { useContext, useEffect, useState } from 'react'
import { loginAndData } from '../Contexts/LoginandDatacontext'

export default function Timer() {
    const endtest=useContext(loginAndData)
    let timer=30
    const[time,setTime]=useState(timer)
    const startTimer=()=>{
          let a= setInterval(()=>{
                timer--
                setTime(timer)
                // console.log(time,endtest.endtest,timer)
                if(timer==0){
                    clearInterval(a);
                    endtest.setEndTest(true)
                    // console.log(endtest.endtest)
                }
            },1000)
    }
    // useEffect(() => {
    //   startTimer()
    // }, [])
    
  return (
    <>
    <div className="flex flex-col">
    <p className='text-lg'>Time Left <br/>{time} Seconds</p>
    </div>

    </>

  )
}
