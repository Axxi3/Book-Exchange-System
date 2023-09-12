const mongoose =require('mongoose')   
const {Schema}= mongoose;  
const Books =new Schema(  { 

    _id: { 
        type:String, 
       required:true
    },
    CategoryName: { 
        type:String, 
       required:true
    },   
    Books: { 
        type:Array, 
       required:true
    }, 
    
}
)


module.exports=mongoose.model ('Books', Books)