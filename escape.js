var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var addr = "gilgit";
  let name = "cloudlem";
  //===========THIS METHOD PREVENTS SQL INJECTION ==================================
  //   var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(addr);
  //   con.query(sql, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log(result);
  //   });

  //==================ALTERNATE CODE FOR ESCAPE================
  let sql = "select * from customers where name = ? and address = ?";
  con.query(sql, [name, addr], (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  con.end((err) => {
    if (err) {
      console.log(err);
    }
    console.log("connection is end successfully");
  });
});
