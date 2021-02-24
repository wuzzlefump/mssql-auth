const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const morgan = require('morgan')
const bodyParser = require('body-parser')
const _ = require('lodash')
const uuid = require('uuid')
const openapi = require("@wesleytodd/openapi")
const sql = require('mssql')

app.use(morgan("tiny"))
//gives small messages
app.use(bodyParser.json());
// allows reading of req bodies in json
app.post("/login", async (req,res)=>{

})





app.listen(PORT, (error)=>{
    if(error) throw error;
    console.log(`connected on port ${PORT}` )
})