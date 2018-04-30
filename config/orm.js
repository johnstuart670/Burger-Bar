// import our connection info
var connection = require('./connection.js');
// make an object to export to other modules with differnet functions as keys within the stuff
var orm = {
	// function that will return all the items in our array but allows us to pass in a callback
	selectAll: function (callback) {
		var queryURL = "SELECT * FROM burgers_db;"
		connection.query(queryURL, function (error, results) {
			if (error) {
				return (console.log("There was an error"))
			}
			return callback(results);
		})
	},
	// function that will add 1 row to the mySQL database using 4 arguments and a callback
	insertOne: function (column1, column2, value1, value2, callback) {
		var queryURL = "INSERT INTO burger_table (??, ??) VALUES (??, ??)"
		// do the SQL post, passing in the four arguments
		connection.query("queryURL", [column1, column2, value1, value2], function (error, results) {
			// error handling
			if (error) {
				return (console.log(error))
			};
			// do the callback function on the results of the query
			return callback(results);
		})
	},
	// define the orm.updateOne function as a function with three arguments and a callback function
	updateOne: function (column, value, idToUpdate, callback) {
		// build the queryURL 
		var queryURL = "UPDATE burger_table set (??) = (??) where ID = (??)"
		// do the SQL connection, passing in the three arguments
		connection.query("queryURL", [column, value, idToUpdate], function (error, results) {
			// error handling
			if (error) {
				return (console.log(error))
			};
			// do the callback function on the results of the query
			return callback(results);
		})
	}

}

module.exports = orm;