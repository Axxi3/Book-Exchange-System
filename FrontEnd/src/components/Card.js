 import React from 'react'

export default function Card(props) {
  return (
   <> 
   <div class="card carder" >
  <img src={props.link} class="card-img-top" alt="..." />
  <div class="card-body c">
    <h5 class="card-title">{props.name}</h5>   

    <p class="card-text">Written by {props.author}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </>
  )
}
