import React from 'react'
import bookpic from "../images/bookhubbhay.jpg"
export default function Bookofthemonth() {
  return (
    <div className='Bookofthemonthbg'>
      
            <img src={bookpic} alt="" className='bookpic2' />
    
        <div className="right"> 
        <h1>Best Selling book of the month</h1>   
        <h5>The Art of seduction By robert greene</h5>
        <a href='#mainsec'><button type="button">Buy now</button></a>
        </div>
    </div>
  )
}
