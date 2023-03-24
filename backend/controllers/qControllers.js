const db = require("../config/db");

const queryItem = async (req, res) => {
  try {
    let sql = "SELECT * FROM book;"
    const [books, _] = await db.execute(sql);
    res.status(200).json({
      count: books.length,
      books
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {queryItem};