// import our connection info
var connection = require('./connection.js');

// Helper function for generating My SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
};

// make an object to export to other modules with differnet functions as keys within the stuff
var orm = {
	// function that will return all the items in our array but allows us to pass in a callback
	selectAll: function (tableSelect, callback) {
		var queryURL = "SELECT * FROM " + tableSelect + ";"
		connection.query(queryURL, function (error, results) {
			if (error) {
				return (console.log("There was an error"))
			}
			callback(results);
		})
	},
	// function that will add 1 row to the mySQL database using 4 arguments and a callback
	insertOne: function (tableSelect, value1, value2, callback) {
		var queryURL = "INSERT INTO `" + tableSelect + "` (`burger_name`, `devoured`) VALUES (?, ?) ;"
		// do the SQL post, passing in the four arguments
		connection.query(queryURL, [value1, value2], function (error, results) {
			// error handling
			if (error) {
				return (console.log(error))
			};
			// do the callback function on the results of the query
			callback(results);
		})
	},
	// define the orm.updateOne function as a function with three arguments and a callback function
	updateOne: function (tableSelect, objectValues, condition, callback) {
		// build our queryURL using the passed in table Value 
		var queryURL = "UPDATE " + tableSelect + "  SET ? WHERE ?;";

		// do the SQL connection, passing in the two arguments 
		connection.query(queryURL, [objectValues, condition], function (error, results) {
			// error handling
			if (error) {
				return (console.log(error))
			};
			// do the callback function on the results of the query
			callback(results);
		})
	}

};

module.exports = orm;