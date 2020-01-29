const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const connection = require("./conf");
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

// const { authenticate } = require('./authenticate');
const signup = require('./signup');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


//SIGN IN
app.post('/next/signin', (req, res) => {
  const secret = process.env.JWT_SECRET;

  const { login, password } = req.body;
  // const sqlQuery = 'SELECT * FROM user WHERE login = ?';
  connection.query('SELECT * FROM user WHERE login = ?', login, async (error, results) => {
    try {
      if (error) {
        res.status(500).json({
          status: 'error',
          message: error
        });
      }
      const user = results[0];
      if (!user) {
        throw new Error('User not found');
      }
      const isPasswordCorrect = await argon2.verify(user.password, password);
      if (!isPasswordCorrect) {
        throw new Error('Invalid Password');
      }
      const payload = {
        id: user.id,
        name: user.name,
      };
      const token = {
        token: jwt.sign(payload, secret, { expiresIn: '6h' })
      };
      res.status(200).json(token);
    } catch (err) {
      if (err.message === 'Invalid Password') {
        res.status(401).send('invalid credentials');
      }
    }
  });
});

// });
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

// DELETE A BOOK ADMIN
app.delete('/next/book/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM book WHERE id = ${id}`, err => {
    if (err) {
      res.status(500).send('Error while deleting a book');
    } else {
      res.status(200).send(`Book deleted`)
    }
  });
});

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

app.post("/next/user", signup)

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
