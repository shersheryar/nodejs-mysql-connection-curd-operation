const express = require("express");
const con = require("../connectionSql");

const app = express();
app.use(express.json());
app.post("/", (req, res) => {
  //   const data = {
  //     user_id: 10,
  //     first_name: "sheryar",
  //     last_name: "sher",
  //     email: "sh@adfd",
  //     password: "1233",
  //   };
  const data = req.body;
  con.query("insert into accounts SET ?", data, (err, result, field) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(5002);
