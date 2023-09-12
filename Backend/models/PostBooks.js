const mongoose =require('mongoose')   
const {Schema}= mongoose;  
const BooksImages =new Schema(  { 

    id: { 
        type:String, 
       required:true
    },
    CategoryName: { 
        type:String, 
       required:true
    },   
      
    BooksImages: { 
        type:Array, 
       required:true
    }, 
    
}
)


module.exports=mongoose.model ('BooksImages', BooksImages)