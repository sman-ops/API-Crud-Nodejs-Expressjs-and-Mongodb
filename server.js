const express=require('express');
const bodyParser=require('body-parser');

const dbConfig=require('./config/db.config')
const mongoose= require('mongoose')

const userRouters = require('./src/routes/user.routes')

// create express app 
const app=express();

// parse request of content-type-application/ x-www-from-urlencoded  


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/api/users',userRouters)

// setup server port
const port =4000;

// connection Database
mongoose.connect(dbConfig.url).then(()=>{
    console.log('successufuly connected to Database ');
}).catch(err=>{
    console.log('could not connected to database',err)
    process.exit();

})


app.get('/test123',(req,res)=>{
    res.json({"message":" Hello world"  })
})


app.listen(port,()=>{
    console.log("node server is running  with success")
})



