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
  connection.query(
    `SELECT DISTINCT book.id AS bookID, book.title, book.genre, book.author, book.cover, next.id_book, next.id AS nextId FROM book LEFT JOIN next ON next.id_book = book.id`,
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

//DELETE FAV LINKED TO BOOK ON ADMIN
app.delete('/next/book/fav/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM next WHERE id_book = ${id}`, err => {
    if (err) {
      res.status(500).send('Error while deleting favorites');
    } else {
      res.status(200).send('Favorites were deleted');
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

//REMOVE A BOOK FROM READING LIST
app.delete("/next/fav/:id", (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM next WHERE id = ? `, id, (err, results) => {
    if (err) {
      res.status(500).json({
        status: err
      });
    } else {
      res.status(200).send("Book removed from list");
    }
  });
});

//GET MY NEXT BOOKS
app.get("/next/fav/book", (req, res) => {
  connection.query(
    "SELECT book.*, next.id AS nextId FROM book JOIN next WHERE book.id = next.id_book",
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
