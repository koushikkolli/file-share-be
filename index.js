const mongodb = require("mongodb")
const cors = require("cors")
const express = require("express");
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")
const multer = require('multer');
const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectID
const ISODate = mongodb.ISODate
const app = express();
let port = process.env.PORT || 3001;
app.listen(port, ()=>console.log(`The app is running on port: ${port}`));
app.use(express.json());
app.use(cors())
dotenv.config()

const url = process.env.DB_URL || 'mongodb://localhost:27017';




const upload = multer({ storage: multer.memoryStorage() });


app.post("/upload", upload.single('image'),async (req, res) => {
    try {
     console.log(req.file)
     res.status(200).json({
        message: "Activation mail sent",
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Internal Server Error"
      });
    }
  });