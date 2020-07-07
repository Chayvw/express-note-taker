// 1. Require Express
const express = require("express");
const path = require("path");
const fs = require("fs");

// 2. Create an instance of Express - app
const app = express();

// 3. Create a PORT
const PORT = process.env.PORT || 3100;

// Add data-parsing boilerplate to read POST body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Routes
app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  app.get("notes", (req, res) => { 
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

// 4. Listen on that port
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });