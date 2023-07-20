const con = require("../connectionSql");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  con.query("select * from profile", (err, result) => {
    if (err) res.send(err);
    else {
      res.send(result);
    }
  });
  // res.send("route done");
});

app.listen(5001);
