let mysql = require("mysql");

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

con.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected");
  let id = 2;
  let update =
    "update customers set address = 'hunza' where id= " + con.escape(id);
  con.query(update, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("number of rows updated: " + result.affectedRows);
  });
  con.query("select * from customers", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  con.end((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("connection end successfully");
  });
});
