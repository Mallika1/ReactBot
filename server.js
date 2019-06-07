const express = require('express');

// Tells node that we are creating an "express" server
var app = express();

app.get("/", function(req, res) {
    res.send({"hello" : "there"});
  });

  app.post("/api/textquery", function(req, res) {
    res.send({"hello" : "there1"});
  });

  app.post("/api/eventquery", function(req, res) {
    res.send({"hello" : "there2"});
  });


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });