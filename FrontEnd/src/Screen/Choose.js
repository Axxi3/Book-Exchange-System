import React from 'react'
import {  useNavigate } from "react-router-dom";
export default function Choose() {  
const navigate=useNavigate()
    const addproduct=()=>{ 
navigate("/addproduct")
    }  
    const gotomarketplace=()=>{ 
        navigate("/")
    }


  return (
    <div className='login'>  
    
    
    <button type="button" className="btn btn-primary choosebutton" onClick={addproduct}>
  I am here to buy
</button>
<button type="button" className="btn btn-primary choosebutton" onClick={gotomarketplace}>
  I am here to sell
</button>

    </div>
  )
}
