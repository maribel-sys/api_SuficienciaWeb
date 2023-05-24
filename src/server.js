const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();

const authRoute = require('./routes/authRoute');
const friendRoute = require('./routes/friendRoute');
const postRoute = require('./routes/postRoute');

require("./db");

// import Middleware
const authMidleware = require("./middleware/authMiddleware");
const { default: mongoose } = require("mongoose");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../uploads')));

// route 
app.use('/auth', authRoute);
app.use('/friend', authMidleware ,friendRoute);
app.use('/post', authMidleware ,postRoute);


app.listen(process.env.PORT, () => {
    console.log("Server is running port = " + process.env.PORT);
})
