const express=require("express");
const app=express();
const morgan=require("morgan");
const cors = require('cors');
app.use(morgan('dev'));
require('dotenv').config();
require("./db/mongodb");
app.use(cors());

const api=require('./routes/blogRoute');
app.use('/api',api)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});