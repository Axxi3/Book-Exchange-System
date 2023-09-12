import React, { useEffect, useState } from 'react'

export default function Routine(props) {    
    const[routine,setRoutine]=useState({}) 
    // useEffect(()=>{ 
    //     if(props.day===1){ 
    //         setRoutine({""})
    //     }
    // })
  return (
    <div>{props.day}</div>
  )
}
