const express = require('express'); 
const { body, validationResult } = require('express-validator');
const router = express.Router();
const cors = require('cors');  
router.get("/getcategories",(req,res)=>{ 
    try {  
       
        res.send([global.data])
    } catch (error) {
        console.log(error)  
        res.send("Server Error")
    }
})  
module.exports= router