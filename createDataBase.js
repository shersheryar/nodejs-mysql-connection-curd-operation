let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
  con.query("create database mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
