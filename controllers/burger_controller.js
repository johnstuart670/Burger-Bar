var express = require("express");

var router = express.Router();


// Import the model to use its database functions.
var Burger = require("../models/burger.js");

// let's do some routing

// on the index/home area:
router.get("/", function(req, res){
	Burger.getAll(function(data) {
			var hbsObject = {
				burgers: data
			};
			// console.log(hbsObject);
			res.render('index', hbsObject);
		})});
	

// on the api post to the updateDevour + the  ID
	router.put("/API/updateDevourTruthy/:id", function( req, res){
	// run the Burger Update function which will update the devour column to truthy based on the id
		Burger.update("devour", true, req.params.id, function(data){
			// create an object for handlebars
			var handlebarsObj = {
				burgers : data
			};

		});
	});

	// on the api post to the updateDevour + the  ID
	router.put("/API/updateDevourFalsey/:id", function( req, res){
		// run the Burger Update function which will update the devour column to truthy based on the id
			Burger.update("devour", false, req.params.id, function(data){
				// create an object for handlebars
			});
		});

// when the user routes through the API/newEntry
router.post("/API/newEntry", function( req, res){
			Burger.insert(req.body.new_burger_name, function(data){
				// create an object to handle in handlebars
			})
		});

module.exports = router;

