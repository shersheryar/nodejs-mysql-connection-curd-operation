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
  let ele = 3;
  let del = "delete from customers where id= " + con.escape(ele);
  con.query(del, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("number of rows deleted: " + result.affectedRows);
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
