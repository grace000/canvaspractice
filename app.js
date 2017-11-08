// Dependencies
// ===========================================================
const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
const app = express();
const PORT = 3002;

// //parse application/json
// app.use(bodyParser.json());

// //parse application/x-ww-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// //parse an HTML body into a string
// app.use(bodyParser.text());

// //parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Data
// ===========================================================
const characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// Serve static files from the React app
// app.use(express.stat`ic(path.join(__dirname, 'client/build')));
app.use(express.static(`${__dirname}/client/build`));

// Question mark signifies that the parameter is "optional".
app.get("/api/:characters?", function(req, res) {
  // Grab the selected parameter
  const chosen = req.params.characters;

  // If a parameter is provided...
  if (chosen) {
    console.log(chosen);

    // Filter to show only the selected character
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }

    // Otherwise display "No character found"
    return res.send("No character found");
  }

  // If no parameter is provided display all the characters
  return res.json(characters);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(express.resolve`${__dirname}../client/build`, 'index.html');
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
