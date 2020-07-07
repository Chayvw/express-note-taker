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

//
app.use(express.static("public"));




// View Routes
  app.get("/notes", (req, res) => { 
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

  app.get("*", (req, res) => { 
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  // API Routes will GET and POST fs will read file res.json will 
  
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      return res.send("An error occurred reading your data.");
    }
  
    const newNotes = JSON.parse(data);
    res.json(newNotes);
  });
});
// New notes will be added 
app.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      return res.send("An error occurred reading your data.");
    }
    // manlipluate data
    const newNotes = JSON.parse(data);
    res.json(newNotes);
    newNotes.push(req.body);
    // fs will write the data back
    fs.writeFile("./db/db.json", JSON.stringifynewNotes, "utf8", (err, data) => {

      if (err) {
        return res.send("An error occurred reading your data.");
      }
      res.JSON(newNotes);
  });
});

// 4. Listen on that PORT
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
});
