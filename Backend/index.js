const express = require('express')
const app = express()
const port = 5000    
const cors = require('cors');
const mongoDB=require("./dataBase")   
app.use(cors());
mongoDB();  
app.use(express.json({ limit: '10mb' }));
app.use(require("./routes/createUser"))  
app.use(require("./routes/DisplayData"))     
app.use(require("./routes/Functionality"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})