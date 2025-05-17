const express = require ("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`)
});
