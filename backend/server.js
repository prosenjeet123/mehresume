//some copy paste job obviously
const express = require('express');
const cors = require('cors');
//intentionally changed to mango xd
const mongoose = require('mongoose');

require('dotenv').config();

//to start the express as taught by 1 hour crash course of react mongo
const app = express();
const port= process.env.PORT || 5000;

//initiate cors baba
app.use(cors());

//init express baba || parse json
app.use(express.json());


//**************** */
//some mango things copy pasted config from mongo atlas

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
  console.log('Mangodb connection estd. successfully!')
})


//use the ROUTES APIS with backslash 
const profileRouter = require('./routes/getprofile');
const usersRouter = require('./routes/users');

app.use('/getprofile',profileRouter);
app.use('/users', usersRouter);


//start the server
app.listen(port,()=>{
    console.log(`Server is running at all cost on dwar: ${port}`);
})
