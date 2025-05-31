const express = require ("express");
const dotenv = require("dotenv");
const cors = require("cors");
const readmeRoutes = require("./routes/readmeRoutes");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/readme", readmeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, (req,res)=>{
    console.log(`server is running on Port ${PORT}`)
});


