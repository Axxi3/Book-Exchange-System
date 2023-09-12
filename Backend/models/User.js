const mongoose =require('mongoose')   
const {Schema}= mongoose;  
const userData =new Schema(  { 

    name: { 
        type:String, 
       required:true
    },  pfp: { 
        type:String, 
       required:true
    },  
      
    email: { 
        type:String, 
       required:true
    }, 
    class:{ 
        type:String, 
        require:true
    } ,
    password: { 
        type:String, 
       required:true
    } 
}
)


module.exports=mongoose.model ('user', userData)