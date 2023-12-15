import React, {  useState } from "react";
import Navbar from "../components/Navbar";
import { decodeToken } from "react-jwt";
import Card from "../components/Card";
import Loader from "../components/Loader";
export default function Account() {
  const [images, setimages] = useState([]);
  const [auth, setauth] = useState("");  
  const [pfp, setpfp] = useState("");  
  const [name, setname] = useState("");  
  const [load,setLoad]=useState(true)

  const [initialized, setInitialized] = useState(false);

  
  if (!initialized) {
    let auth = localStorage.getItem("authtoken");
    let id = "";
    // console.log(storedCartData)
    console.log(auth)

    if (auth === null) {
      return;
    } else {
      const myDecodedToken = decodeToken(auth);

      id = myDecodedToken.user.id;
      setauth(id);
      console.log(id);  
      setpfp(myDecodedToken.user.pfp)   
      setname(myDecodedToken.user.name) 
      if (myDecodedToken !== null) {
        // console.log(myDecodedToken.user.id)
        // realtoken(myDecodedToken.user.id)
      }
    }
    // console.log("hashcjhsvd"+auth)
    getImages(id);      
    console.log("Component initialized");
    setInitialized(true); // Mark as initialized to prevent future runs
    return;
   
  }

  

 

  async function getImages(id) {    
  
    console.log("running getImages")
    try {
      const url = "http://localhost:5000/getimages/" + id;
      const respo = await fetch(url, {
        method: "GET",
      });
  
      if (!respo.ok) {
        throw new Error("Network response was not ok");
      }
  
      const response = await respo.json();
      const data = response.document;
      console.log(data.length);
  
      data.map((item) => {
        setimages((prevImages) => [...prevImages, item.coverPic]);
        return null; 
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }  
    setLoad(false)
  }
  




  return (
    <>
      <Navbar />
      <div className="account">
        <div className="selfinfo">
          <img
            src={pfp}
            alt=""
            className="pfp"
          />
          <h1>{name}</h1>
        </div>

        <h1>Your Books</h1>
      </div>

      <div className="images" id='book'>  
      { 
      load===true ? <Loader/>: null
      }
      { 
        load===false && images.length !== 0 ? images.map((data)=>{ 
          return( 
              <Card link={data}/>
          )
        }) : null  
        // images.length !== 0 ? console.log(images.length) :null
      }
      </div>
    </>
  );
}
