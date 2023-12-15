import React from 'react'
import Navbar from '../components/Navbar'
import study from "../images/study.png"  
import book from "../images/book.png"  
import quality from "../images/quality.png"  
import dollar from "../images/dollar.png"  
import bookpic from "../images/bookhubbhay.jpg"
import Card from '../components/Card'
import Bookofthemonth from '../components/Bookofthemonth'
import Footer from '../components/Footer'
export default function Home() {
  return ( 
    <>
    <Navbar/> 
    <div className="hero" id="home">   
    <div className="text">
    <h1>Buy Books at a cheaper price</h1>  
    <p>Cheaper than your regular resell books buying market</p> 
    <a href='#mainsec'><button type="button">Explore Books</button></a>
    </div>
 <div className="img"> 
 <img src={study} alt="" />
 </div>
    </div>    
    <div className="hero2"> 
    
    <ul>
      <li>
        <div className='points'>
          <img src={book} alt="affordable" className='icons'/>
          <p>Books that last,unlike you</p>
        </div>
      </li>
      <li>
        <div className='points'>
          <img src={quality} alt="affordable" className='icons'/>
          <p>Better quality, than your mental health</p>
        </div>
      </li>
      <li>
        <div className='points'>
          <img src={dollar} alt="affordable" className='icons'/>
          <p>Cheaper than the amount you spend on simping</p>
        </div>
      </li>
    </ul>
    
    </div>
    <div className="main" id='mainsec'> 
    <h1>Books selected for you</h1>  
    <div className="images"> 
    
    <Card link={bookpic}/>  
    <Card link={bookpic}/>
    <Card link={bookpic}/>
    <Card link={bookpic}/>

    </div>
    <Bookofthemonth/>  
   <Footer/>  
   </div>
    </>
  )
}
