const mongoose = require('mongoose');

const mongoURI="mongodb+srv://Literallyraj:Trisha69@cluster0.bufm0fk.mongodb.net/?retryWrites=true&w=majority"
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);  
        const FoodCategory = mongoose.model("Categories", new mongoose.Schema({}), "Categories");   
        console.log("Connected successfully");  
        global.data = await FoodCategory.find({}).exec();   
         
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
       
}


module.exports = mongoDB;