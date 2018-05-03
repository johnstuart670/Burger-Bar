// Let's do some imports:

// express for routing:
var express = require("express");
var app = express();
var path = require('path');

// body parser to allow for information to be passed in from the user of the app
var bodyParser = require("body-parser");

app.use('/static', express.static(path.join(__dirname, '/public')));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// put handlebars into use
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set a port variable
var PORT = process.env.PORT || 3040;

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");
app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


