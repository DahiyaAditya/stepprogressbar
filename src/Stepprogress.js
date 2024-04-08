import React, { useState } from 'react'
import "./App.css"
const Stepprogress = () => {
    let noOfCircle=5
    let array=[]
    for(let i=1; i<=noOfCircle; i++){
        array.push([i]);
    }
    const [currentStep, setCurrentStep]=useState(1)
    const handleNextStep=()=>{
       if(currentStep < noOfCircle){
        setCurrentStep(prev=>prev+1)
       }else{
        setCurrentStep(0)
       }
    }
  return (
    <>
    <div className='container'>
        {
            array.map((obj,index)=>{
                return(
                        <>
                        <div key={index} className={(index< currentStep)? "circle1" : "circle"}>
                            {obj}
                        </div>
                        <div className={(index< currentStep)? "line1" : "line"}></div>
                        </>   
                )
            })
        }
    </div>
    <button onClick={handleNextStep}>NEXT</button>
    </>
  )
}

export default Stepprogress