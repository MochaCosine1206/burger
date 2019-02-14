var express = require("express");

var app = express();

var burger = require('./models/burgers')

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    burger.selectAll(req.body.burger)
  });
  
  // Create a new burger
  app.post("/burgers", function(req, res) {
    burger.insertOne(req.body.burger);
  });
  
  // Update a burger
  app.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.body.burger, req.params.id)
  });
  
 
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });