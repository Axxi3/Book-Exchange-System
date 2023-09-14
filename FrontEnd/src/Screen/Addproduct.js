import React, {useCallback, useEffect, useState} from 'react'
import {  decodeToken } from "react-jwt";
import Loader from '../components/Loader';
export default function Addproduct() {      
  const[auth,setauth]=useState("") 
  const [imageStack, setImageStack] = useState([]);   // Initialize an empty stack for storing base64 images
  const [credentials,setcredentials]=useState({
    Author:"", 
    quantity:"", 
   Publish_year:"", 
    name:"" , 
    class:""
  })         
  const [load,setload]=useState(false)
  const changeValue=(event)=> { 
    setcredentials({...credentials,[event.target.name]:event.target.value})    
    console.log({...credentials,[event.target.name]:event.target.value})
    } 
  const optionsArray = [  
    "UG Degree 1st Semester",
   "UG Degree 2nd Semester", 
   "UG Degree 3rd Semester", 
   "UG Degree 4th Semester", 
   "UG Degree 5th Semester", 
   "UG Degree 6th Semester", 
   "HS - Science", 
   "HS - Commerce", 
   "HS - Arts"
    ];  

    useEffect(()=>{   
      let auth = localStorage.getItem('authtoken');  
      let id=""
      // console.log(storedCartData)
  
      if (auth === null) {
       // This will still show the previous value of login (useState is asynchronous)
      } else {
       
        const myDecodedToken = decodeToken(auth);
      
        
        id=myDecodedToken.user.id 
        setauth(id)   
        console.log(id)
        if(myDecodedToken!== null) { 
          // console.log(myDecodedToken.user.id)  
            // realtoken(myDecodedToken.user.id)
        }
      }    
     
      
    },[])

console.log(imageStack)

  const convertToBase64 = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]) 
      reader.onload=()=>{ 
        console.log(reader.result)  
        setImageStack((prevStack) => [...prevStack, reader.result]);
      }  
      reader.onerror=error=>{ 
        console.log("error",error)
      }
    }  
    console.log(imageStack.length)
  };  

  const submitHogaya=async ()=>{    
    setload(true) 
    console.log("proccess Started")
    const respo=await fetch("http://localhost:5000/postBooks",{ 
      method:"POST",
      headers:{ 
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ 
        Ownerid:auth, 
        CategoryName:credentials.class, 
        BooksImages:imageStack, 
        coverPic:imageStack[0],
        Author:credentials.Author, 
        quantity:credentials.quantity, 
        Publish_year:credentials.Publish_year , 
        name:credentials.name
      })
    })   
    console.log("proccess Started 2")
    const res=await respo.json()   
    console.log("proccess Started 2") 
    console.log(res)  
    if(res.success){ 
      setImageStack([])  

      setload(false)
    }
  }


  return (  

<> 


      { 
      load===true ? <div className="images" id='book'>
      <Loader/>
      </div> : null
      }

    { 
      load === false ?  <form className='product-Adder'>     
      <h1>Hey Anurag!</h1>    
      <div className="mb-4 namer">
 <label htmlFor="formGroupExampleInput" className="form-label">Book Name</label>
 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type Book name" name='name' value={credentials.name} onChange={changeValue}/> 
 <label htmlFor="formGroupExampleInput" className="form-label">Author Name</label>
 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type Author name" name='Author' value={credentials.Author} onChange={changeValue}/>
</div>    

<div className="mb-4 namer">  
<label htmlFor="formGroupExampleInput" className="form-label">Publishing Year</label>
 <input type="Year" className="form-control" id="formGroupExampleInput" placeholder="Type Publishing" name='Publish_year' value={credentials.Publish_year} onChange={changeValue}/>  
 <label htmlFor="formGroupExampleInput" className="form-label">Quantity</label>
 <input type="Number" className="form-control" id="formGroupExampleInput" placeholder="Total Quantity you have" name='quantity' value={credentials.quantity} onChange={changeValue}/>
 
   </div>  


      <div className="col-md-4 Choose-class">
   <label htmlFor="inputState" className="form-label">Class</label>
   <select id="inputState" className="form-select" name='class' value={credentials.class} onChange={changeValue}>
     <option selected>Choose...</option>
     {optionsArray.map((option, index) => (
     <option key={index}>{option}</option>
   ))}
   </select>
 </div>  
 <div class="drag-drop-container" id="custom-dropzone">
        <label for="file-input">Click or Drag & Drop Files Here</label>
        <input type="file" id="file-input" accept="images"  onChange={convertToBase64}/>
    </div>  
    <h2>Once You Drop pic you will see the images here</h2>
      {/* <input accept="images" type="file" onChange={convertToBase64} className='dropper' />   */}
      <div className="product-Images">   

      {imageStack.map((base64Image, index) => (
        <img
          key={index}  
          className='preview'
          src={base64Image}
          alt={`Preview ${index}`}
        />
      ))}
      </div>
     { 
     imageStack.length >=1 && 
<button type="button" className='imagesbutt' onClick={submitHogaya}>Post Images</button>
     
     }
     


    </form> : null
    }
   </>
  );
}
