var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query(
    //use can sort the  data using order by function in sql.. originally is sort ascending using can use DESC for descending
    "SELECT * FROM customers order by id desc",
    function (err, result, fields) {
      //field is use to get the information about the table
      if (err) throw err;

      //use can get any element from the result by using indexing and name of the column
      console.log(result);
    }
  );
  con.end((err) => {
    if (err) throw err;
    console.log("connection end successfully");
  });
});
