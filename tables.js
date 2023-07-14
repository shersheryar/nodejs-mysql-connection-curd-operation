let mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
  let sql =
    "create table customers (id int auto_increment primary key,name varchar(255), address varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("table created");
  });
});

con.end(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connection end");
});
