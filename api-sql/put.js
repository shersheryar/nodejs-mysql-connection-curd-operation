const express = require("express");
const con = require("../connectionSql");

const app = express();
app.use(express.json());
app.put("/:id", (req, res) => {
  const data = [req.body.designation, req.body.allowances, req.params.id];
  con.query(
    "update accounts set designation = ?, allowances = ? where id = ?",
    data,
    (err, result, field) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.listen(5009);
