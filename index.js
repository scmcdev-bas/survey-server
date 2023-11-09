const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());
const secretKey = "newSecretKey";
const fs = require("fs");
const { log } = require("console");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const xlsx = require("xlsx");
const pool = require("./src/db"); // Import the pool object from the db.js file
const { searchAgentData } = require("./routes"); // Import the searchAgentData function from routes.js

app.post("/searchagentdata", searchAgentData);


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
