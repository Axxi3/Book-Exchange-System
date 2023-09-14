import React, { useState } from 'react'
import NavBar from "../components/Navbar"  
import Typed from 'typed.js';  
import Loading from '../components/Loader';  

export default function Aboutus() {  

  const [login, setLogin] = useState(false);    
  const [load,setload]=useState(false)
  const [credentials,setcredentials]=useState({
      name:"" , 
      email:"", 
      complain:"", 
     
    })   

    const changeValue=(event)=> { 
      setcredentials({...credentials,[event.target.name]:event.target.value})  

      console.log(event.target.value)
      }  

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Hello</i> From Raj.', 'Welcome to our Contact Us Page'],
      typeSpeed: 60,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []); 

  const SubmitHogaya=async (event)=>{ 
    setload(true)
    event.preventDefault()
    const repo=await fetch("http://localhost:5000/complain",{ 
      method:"POST", 
      headers:{ 
        "Content-Type":"application/json"
      }, 
      body:JSON.stringify({ 
        name:credentials.name, 
        email:credentials.email, 
        complain:credentials.complain
      })
    })  

    const res=await repo.json()  
    if(res.success===true){  
      setload(false)
      alert("Complain submitted")  
      setcredentials({ 
        name:"" , 
        email:"", 
        complain:"", 
      })
    }
  }






  return (     
    <div className='Contactus'> 
    <NavBar/>  
    <div className="About_us_heading">
      <h1 ref={el} />
    </div> 
    <div className="right"> 
    <div className="rightcontact"> 
 
{load && ( 
          <div className="right centre form"> 
              <Loading/>
          </div>
        )}    
        { !load && ( 
          <form className="form" onSubmit={SubmitHogaya}>

<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type your name"  name='name' value={credentials.name} onChange={changeValue} />
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"  name='email' value={credentials.email} onChange={changeValue} placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Explain your problem</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  name='complain' value={credentials.complain} onChange={changeValue}></textarea>
</div>   
<div className="col-12 ">
    <button type="submit" className="btn btn-primary ">Submit</button>
  </div>
  
</form>
        )}

</div>
    </div>
    </div>
   

  )
}
