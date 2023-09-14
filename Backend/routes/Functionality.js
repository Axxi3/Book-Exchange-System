const express = require('express');
const router = express.Router();
const Document = require('../models/Books')    
const { body, validationResult } = require('express-validator'); 
const images=require("../models/Product")  
const cors = require('cors');    
const complain=require("../models/ComplaningUsers")   

router.get('/getcategorybooks/:name',cors(), async (req, res) => {
    const name = req.params.name;  
    console.log(name)
    try {
      const document = await Document.find({ 
        "$or": [
            {
              "CategoryName": name, // Using the provided key directly
            },
          ],
      });
      if (!document) {
        res.status(404).json({ error: 'Document not found' });
      } else {
        res.json({success:true ,document});
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });      

  

  router.post('/postBooks', cors(), async (req, res) => {
      try {
          const { coverPic,CategoryName, BooksImages, Ownerid ,Author,quantity,Publish_year,name} = req.body;  
          
          
          // Assuming 'images' is your Mongoose model for storing book data
          await images.create({  
            coverPic,  
            CategoryName,     
            Location:"Guwahati",   
            Ownerid,
            BooksImages: BooksImages ,// Store each base64 image as an object
            Author, 
            quantity, 
            Publish_year, 
            name
          });
  
          res.status(201).json({ success:true,message: 'Book data saved successfully' });
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
      }
  }); 


  router.post("/complain",cors(),
  body('name',"Please write your name").notEmpty(),
  body('para', "Please Tell us more about it").isLength({ min: 30, max: 200 }),
  body('email', 'Not a valid email').isEmail(),async(req,res)=>{ 
    try {
      

      await complain.create({ 
       name: req.body.name, 
       email: req.body.email,
        Complain:req.body.complain
      })     
      res.status(201).json({ success:true,message: 'Complain Submitted Successfully' });
    } catch (error) {
      console.error(error);
          res.status(500).json({ error: 'Internal server error' });
    }
  })
   
  router.get('/getimages/:id',cors(), async (req, res) => {
    const id = req.params.id;  
    // console.log(id)
    try {
      const document = await images.find({ 
        "$or": [
            {
              "Ownerid": id, // Using the provided key directly
            },
          ],
      });
      if (!document) {
        res.status(404).json({ error: 'Document not found' });
      } else {
        res.json({success:true ,document});
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });      

  module.exports= router