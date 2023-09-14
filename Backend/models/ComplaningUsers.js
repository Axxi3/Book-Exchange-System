const mongoose =require('mongoose')   
const {Schema}= mongoose;  
const ComplaningUsers =new Schema(  { 

    name: { 
        type:String, 
       required:true
    }, 
    email: { 
        type:String, 
       required:true
    },
    Complain: { 
        type:String, 
       required:true
    }
}
)


module.exports=mongoose.model ('ComplaningUsers', ComplaningUsers)