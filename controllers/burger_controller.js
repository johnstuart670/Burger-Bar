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
			res.render('index', hbsObject);
		})});
	

// on the api post to the updateDevour + the  ID
	router.post("/API/updateDevourTruthy/:id", function( req, res){
	// run the Burger Update function which will update the devour column to truthy based on the id
		Burger.update({devoured : true}, {ID : parseInt(req.params.id)}, function(data){
			// redirect to the index which then loops through items and updates the page
			res.redirect('/')
			;

		});
	});


// when the user routes through the API/newEntry
router.post("/API/newEntry", function( req, res){
	// pass the new info into the callback function in burger.js
			Burger.insert(req.body.burger_name, false, function(data){
				// redirects to the basic page load so that we get a refresh
				res.redirect('/')
			})
		});

module.exports = router;

