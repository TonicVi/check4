const argon2 = require("argon2");
const randomBytes = require("randombytes");
const connection = require("./conf");

const signup = async (req, res) => {
  const { login, password, name } = req.body;
  const salt = randomBytes(32);
  const encryptedPassword = await argon2.hash(password, { salt });
  const sqlQuery = `INSERT INTO user SET ?`;
  const sentData = {
    name,
    login,
    password: encryptedPassword
  };
  connection.query(sqlQuery, sentData, (error, results) => {
    if (error) {
      res.status(500).json({ status: error });
    }
    res.status(201).json({
      status: "success",
      message: { results }
    });
  });
};

module.exports = signup;
