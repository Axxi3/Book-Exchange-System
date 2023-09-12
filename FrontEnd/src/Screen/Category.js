import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/CategoryCard'
import Card from "../components/Card"  
import Loader from "../components/Loader";
export default function Category() {    
  const [category,setcategory]=useState([])   
  const [whatcategory,setwhatcategory]=useState("UG Degree 2nd Semester")  
  const [books,setbooks]=useState([])  
  const [load,setLoad]=useState(true)
  async function getcategory() {
    const respo=await fetch("http://localhost:5000/getcategories",{ 
      method:"GET"
    })  
    const response=await respo.json()    
    setcategory(response[0])
    
  }
  useEffect(()=>{ 
    getcategory()  
   
  },[])   
  
    async function getcategorybooks(name) {
      const respo=await fetch(`http://localhost:5000/getcategorybooks/${name}`,{ 
        method:"GET"
      })  
      const response =await respo.json()  
     
      setbooks(response.document[0].Books)     
      setLoad(false) 
    
     
    }

    useEffect(()=>{ 
      getcategorybooks(whatcategory)  
      
    },[whatcategory])
    

  function clicked(eaa) {  
  
    setwhatcategory(eaa)
   
 }
console.log(whatcategory)
  return (
    <div className='category'> 
    <Navbar/>  
    <h1>Categories</h1>  
    <div className="categories"> 
    <ul>
    { 
    category.length !== 0 ? category.map((data)=>{ 
      return( 
       <a href="#book"> <CategoryCard name={data.CategoryName} click={clicked}/></a>
      )
    }):null
    }
    </ul>
    </div>  
    <div className="images" id='book'>   
    { 
      load===true ? <Loader/>: null
      }
    { 
         load===false &&  books.length !== 0 &&  books.map((data)=>{ 
      return( 
        <Card name={data.Name} author={data.Author} link="http://via.placeholder.com/900x900"/>
      )
    })
    
    }
    
    
    </div>
    </div>
  )
}
