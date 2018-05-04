var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ak12bwf2d3wojr42",
  password: "pbm4fq77210edo4e",
  database: "oukw5acp8oi4qqab"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;


