var express = require("express");

var router = express.Router();


// Import the model to use its database functions.
var Burger = require("../models/burger.js");

// let's do some routing

// on the index/home area:
router.get("/", function(req, res){
	// use the modeling pages (".all" function and do a callback on the data returned )
Burger.all(function(data){
	// create an object for handlebars
	var handlebarsObj = {
		burgers : data
	};
	// use handlebars to render the burgers on the page.
	res.render("index", handlebarsObj);
	})});

// on the api post to the updateDevour + the  ID
	router.put("/API/updateDevourTruthy/:id", function( req, res){
	// run the Burger Update function which will update the devour column to truthy based on the id
		Burger.update("devour", true, req.params.id, function(data){
			// create an object for handlebars
		});
	});

	// on the api post to the updateDevour + the  ID
	router.put("/API/updateDevourFalsey/:id", function( req, res){
		// run the Burger Update function which will update the devour column to truthy based on the id
			Burger.update("devour", false, req.params.id function(data){
				// create an object for handlebars
			});
		});

// when the user routes through the API/newEntry
router.post("/API/newEntry", function( req, res){
			Burger.insert(req.body.new_burger_name, function(data){
				// create an object to handle in handlebars
			})
		});

		// req.body as shorter item:
		var rB = req.body;
module.exports = router;

