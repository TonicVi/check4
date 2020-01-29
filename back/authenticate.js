const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const connection = require('./conf');

const secret = process.env.JWT_SECRET;

const authenticate = (req, res) => {
  const { login, password } = req.body;
  const sqlQuery = 'SELECT * FROM user WHERE login = ?';
  connection.query(sqlQuery, login, async (error, results) => {
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
};

// const isAuthenticated = expressJWT({ secret });

module.exports = { authenticate };
