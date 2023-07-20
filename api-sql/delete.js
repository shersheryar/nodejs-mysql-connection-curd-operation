const express = require("express");
const con = require("../connectionSql");

const app = express();

app.use(express.json());

app.delete("/:id", (req, res) => {
  let id = req.params.id;
  con.query("delete from accounts where id = ?", id, (err, result, fields) => {
    if (err) throw err;
    else res.send(result);
  });
  //   res.send(req.params.id);
});
app.listen(5009);
