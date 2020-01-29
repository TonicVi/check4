const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const connection = require("./conf");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/next/admin", (req, res) => {
  const formData = req.body;
  // const { name, login, password } = req.body;
  connection.query(`INSERT INTO admin SET ?`, formData, (err, results) => {
    if (err) {
      res.status(500).json({
        status: err
      });
    }
    res.status(201).json({
      status: "success",
      message: { results }
    });
  });
});

app.post('/next/user', (req, res) => {
  const formData = req.body;
  connection.query(`INSERT INTO user SET ?`, formData, (err, results) => {
        if (err) {
      res.status(500).json({
        status: err
      });
    }
    res.status(201).json({
      status: "success",
      message: { results }
    });
  });
});

app.listen(port, err => {
  if (err) {
    throw new Error("Oops");
  }
  console.log(`Server is listening on port ${port}`);
});
