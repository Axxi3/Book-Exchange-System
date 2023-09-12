import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";  
import DOMPurify from 'dompurify';
export default function CreateUser() {  
    const navigate = useNavigate();
    const [credentials,setcredentials]=useState({
      email:"", 
      pass:"", 
      TC:"", 
      name:"" , 
      class:""
    })     
    // const [credentials,setcredentials]=useState({
    //   Author:"", aawdc
    //   quantity:0, 
    //  Publish_year:"", sdkjcblas
    //   name:"" , asdcasd
    //   class:""asdc
    // })      

    const optionsArray = [
      'B.com 1st semester',  
      "B.com 3rd semester",
      "B.com 5th semester"
      ];  


    const changeValue=(event)=> { 
      setcredentials({...credentials,[event.target.name]:event.target.value})    
      console.log({...credentials,[event.target.name]:event.target.value})
      }      

      function extractImgSrcFromApiResponse(apiResponse) {
        // Sanitize the HTML to prevent XSS attacks
        const sanitizedHtml = DOMPurify.sanitize(apiResponse);
      
        // Create a temporary div element to hold the sanitized HTML and parse it
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = sanitizedHtml;
      
        // Find the 'img' tag within the temporary div
        const imgTag = tempDiv.querySelector('img');
      
        // Extract the 'src' attribute value
        if (imgTag) {
          const srcAttribute = imgTag.getAttribute('src');
          return srcAttribute;
        } else {
          return null; // If 'img' tag not found, return null or any other default value you prefer
        }
      }

      async  function pfpgenerator  () {  
        console.log("functioon called");  
       
        const url = 'https://any-anime.p.rapidapi.com/anime/img';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '41c298d452msh44f4170619cd502p1536cfjsn3a0bccff1db3',
            'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
          }
        };
        
        try {
          const response = await fetch(url, options);
          const result = await response.text();  
          console.log("yaha tak hua")  
          const link2 = await extractImgSrcFromApiResponse(result)
          console.log(link2);  
          return link2;
        } catch (error) {
          console.error(error);
        }
      };


const submitHogaya=async (e)=>{   
    e.preventDefault();     
    const link= await pfpgenerator()
    const respo= await fetch("http://localhost:5000/createuser",{ 
        method:"POST", 
        headers:{ 
            "Content-Type":"application/json"
          }, 
          body:JSON.stringify({    
            pfp:link,
            name:credentials.name,
            pass:credentials.pass, 
            email:credentials.email,  
            class:credentials.class
          })  
          
    })  
    const res=await respo.json()     
    console.log(res)
        if(res.success===true){ 
          console.log(res.message)    
          navigate("/login")
        }  
        else { 
          console.log(res.success)
        }
} 
  return (
    <> 
    <div className='login'>  
   <h1>Let's get you started</h1>  
   <div className="form">  
   
   <form className="row g-3" onSubmit={submitHogaya}>   
   <div className="mb-3">
 <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type your name" name='name' value={credentials.name} onChange={changeValue}/>
</div>
 <div className="col-md-6">
   <label htmlFor="inputEmail4" className="form-label" >Email</label>
   <input type="email" className="form-control" id="inputEmail4" placeholder='Type your e-Mail' name='email' value={credentials.email} onChange={changeValue}/>
 </div>
 <div className="col-md-6">
   <label htmlFor="inputPassword4" className="form-label">Password</label>
   <input type="password" className="form-control" id="inputPassword4" placeholder='Type your password' name='pass' value={credentials.pass} onChange={changeValue}/>
 </div>


 <div className="col-md-4">
   <label htmlFor="inputState" className="form-label">Class</label>
   <select id="inputState" className="form-select" name='class' value={credentials.class} onChange={changeValue}>
     <option selected>Choose...</option>
     {optionsArray.map((option, index) => (
     <option key={index}>{option}</option>
   ))}
   </select>
 </div>
 <div className="col-12">
   <div className="form-check">
     <input className="form-check-input" type="checkbox" id="gridCheck"/>
     <label className="form-check-label" htmlFor="gridCheck">
       I agree to the Terms & conditions
     </label>
   </div>
 </div>
 <div className="col-12 ">
   <button type="submit" className="btn btn-primary ">Sign in</button>
 </div>
</form>  
</div> 
   </div>
    </>
  )
}
