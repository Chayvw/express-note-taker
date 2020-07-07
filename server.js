// 1. Require Express
const express = require("express");
// Require a path for our routes
const path = require("path");
// Require fs to read data from the files  
const fs = require("fs");
// an array for new notes 
const newNotes =[];

// 2. Create an instance of Express - app
const app = express();

// 3. Create a PORT
const PORT = process.env.PORT || 3100;

// Add data-parsing boilerplate to read POST body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Routes
app.get("*", (req, res) => { 
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  app.get("/notes", (req, res) => { 
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  // API Routes will GET and POST fs will read file res.json will 
  
app.get("/api/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    
    const newNotes = JSON.parse(data);
    res.json(newNotes);
  });
});

// 4. Listen on that port
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });