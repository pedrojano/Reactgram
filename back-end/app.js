require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const port = process.env.PORT;

const app = express();

const uploadsDir = path.join(__dirname, "/uploads");
const usersDir = path.join(uploadsDir, "/users");
const photosDir = path.join(uploadsDir, "/photos");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log(`Uploads directory created: ${uploadsDir}`);
}

if (!fs.existsSync(usersDir)) {
  fs.mkdirSync(usersDir, { recursive: true });
  console.log(`Users directory created: ${usersDir}`);
}

if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
  console.log(`Photos directory created: ${photosDir}`);
}

// config Json and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Salve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
require("./config/db.js");

// routes
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});



