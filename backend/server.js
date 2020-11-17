//some copy paste job obviously
const express = require('express');
const cors = require('cors');

require('dotenv').config();

//to start the express as taught by 1 hour crash course of react mongo
const app = express();
const port= process.env.PORT || 5000;

//initiate cors baba
app.use(cors());

//init express baba || parse json
app.use(express.json());


//start the server
app.listen(port,()=>{
    console.log(`BABA server is running at all cost on dwar: ${port}`);
})
