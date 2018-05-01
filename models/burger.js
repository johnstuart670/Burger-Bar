

// import the ORM
var orm = require("../config/orm.js");

// build an object to export items on.
var Burger = {
	// all function that runs the orm select * query with a passed in callback function
	getAll: function (callback) {
		orm.selectAll("burger_table", function (results) {
			callback(results);
		});
	},
	// conceptually why are we writing a model for this project?  It seems like an additional step to accomplish our items;

	// update Function that taps into the updateOne function, passing in the arguments
	update: function (callback, column, value, idToUpdate) {
		orm.updateOne("burger_table", column, value, idToUpdate, function (results) {
			callback(results);
		})
	},
	// insert Function that taps into the insertOne function in the orm and passes arguments into it;
	insert: function(new_burger_name, callback){
		orm.insertOne("burger_table", "burger_name", "devoured", new_burger_name, false, function(results){
			callback(results)
		});
}
};

// export our object we're building 
module.exports = Burger;