const mongoose =require('mongoose')   
const {Schema}= mongoose;  
const CategoryData =new Schema(  { 

    name: { 
        type:String, 
       required:true
    }
}
)


module.exports=mongoose.model ('CategoryData', CategoryData)