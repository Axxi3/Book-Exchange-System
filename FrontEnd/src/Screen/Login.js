import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
export default function Login() {      

  const navigate = useNavigate();
  const [credentials,setcredentials]=useState({
    email:"", 
    pass:"", 
    TC:""
  })   
  const changeValue=(event)=> { 
    setcredentials({...credentials,[event.target.name]:event.target.value})    
    console.log({...credentials,[event.target.name]:event.target.value})
    }    

  
    useEffect(()=>{ 
      const auth=localStorage.getItem("authtoken")  
      if(auth!==null) { 
navigate("/")
      }
    },[navigate])
    const submitHogaya=async (e)=>{   
      e.preventDefault();       
      const respo=await fetch("http://localhost:5000/loginuser",{ 
        method:"POST",
        headers:{ 
          "Content-Type":"application/json"
        }, 
        body:JSON.stringify({ 
          pass:credentials.pass, 
          email:credentials.email,
        })
      })  

      const res=await respo.json()     
      console.log(res.message)
      if(res.success){ 
        localStorage.setItem("authtoken",res.auth)
        navigate("/choose")
      }  
      else {   
        alert(res.message)
      
      }
       
    }

  return (
   <div className='login'>  
   <h1>Please Enter your details</h1>  
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='email' value={credentials.email} onChange={changeValue}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  name='pass' value={credentials.pass} onChange={changeValue}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"  name='TC' value={credentials.TC} onChange={changeValue}/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submitHogaya}>Submit</button>  
  
</form>
<div className="newuser">
          <p>
            <NavLink exact to="/newuser">
              New here?Click here and create a account
            </NavLink>
          </p>
        </div>
   </div>
  )
}
