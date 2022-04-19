const express= require("express");
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const authRoute = require("./routes/auth");


dotenv.config()


mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());



app.use("/api/auth", authRoute);

app.listen(8000,()=>{

    console.log("running  http://localhost:8000/api/auth")
})