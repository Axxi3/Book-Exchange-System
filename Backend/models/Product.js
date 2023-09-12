const mongoose =require('mongoose')   
const {Schema}= mongoose;  
const Product =new Schema(  { 

    coverPic: { 
        type:String, 
       required:true
    },  
    Author: { 
        type:String, 
       required:true
    },  
    quantity: { 
        type:String, 
       required:true
    }, 
    Publish_year: { 
        type:String, 
       required:true
    },
    CategoryName: { 
        type:String, 
       required:true
    },    
    name: { 
        type:String, 
       required:true
    }, 
    Location: { 
        type:String, 
       required:true
    },    
    BooksImages: { 
        type:Array, 
       required:true
    },   
    Ownerid: { 
        type:String, 
       required:true
    }
    
}
)


module.exports=mongoose.model ('Product', Product)