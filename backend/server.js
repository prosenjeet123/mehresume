//some copy paste job obviously
const express = require('express');
const cors = require('cors');
//intentionally changed to mango xd
const mango = require('mongoose');

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

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://paul:paul1234@cluster0.wp3qc.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
client.once('open', ()=> {
  console.log('Mango connection estd.')
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log(`neche wala ${collection}`)
});




//start the server
app.listen(port,()=>{
    console.log(`BABA server is running at all cost on dwar: ${port}`);
})
