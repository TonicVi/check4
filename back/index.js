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

//CREATE A NEW BOOK
app.post("/next/book", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO book SET ?", formData, (err, results) => {
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

//GET ALL BOOKS ADMIN
app.get("/next/book", (req, res) => {
  connection.query(`SELECT * FROM book`, (err, results) => {
    if (err) {
      res.status(500).json({
        status: err
      });
    } else {
      res.json(results);
    }
  });
});

//GET ALL BOOK USER
app.get("/next/list", (req, res) => {
  connection.query(`SELECT *, book.id AS bookID, next.id AS nextId FROM book JOIN next`, (err, results) => {
    if (err) {
      res.status(500).json({
        status: err
      });
    } else {
      res.json(results);
    }
  });
});

// DELETE A BOOK ADMIN
app.delete("/next/book/:id", (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM book WHERE id = ${id}`, err => {
    if (err) {
      res.status(500).send("Error while deleting a book");
    } else {
      res.status(200).send(`Book deleted`);
    }
  });
});

//ADD A BOOK TO READING LIST
app.post("/next/fav/:id", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO next SET ?", formData, (err, results) => {
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

//GET MY NEXT BOOKS
app.get("/next/fav/book", (req, res) => {
  connection.query(
    "SELECT book.* FROM book JOIN next WHERE book.id = next.id_book",
    (err, results) => {
      if (err) {
        res.status(500).json({
          status: err
        });
      } else {
        res.json(results);
      }
    }
  );
});

app.post("/next/user", (req, res) => {
  const formData = req.body;
  // const { name, login, password } = req.body;
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

app.post("/next/user", (req, res) => {
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
