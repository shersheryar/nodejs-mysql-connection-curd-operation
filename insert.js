let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("connected");
  let sql = "INSERT INTO customers (name, address) VALUES ('sssds','gilgit')";
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("1 record inserted");
  });
  let cust = "select * from customers";
  con.query(cust, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  con.end((err) => {
    if (err) {
      console.error("Error closing MySQL connection:", err);
      return;
    }
    console.log("MySQL connection closed.");
  });
});
