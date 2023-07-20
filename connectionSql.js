let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "company",
});

con.connect(function (err) {
  if (err) {
    console.error("error connecting to database ", err);
  } else {
    console.log("connected");
  }
});
module.exports = con;
// con.query(
//   `select * from profile where user_id = ${1368} `,
//   (err, result, fields) => {
//     if (err) {
//       return console.log(err);
//     }
//     return console.log(result);
//   }
// );
// con.end((err) => {
//   if (err) {
//     console.error("Error closing MySQL connection:", err);
//     return;
//   }
//   console.log("MySQL connection closed.");
// });
