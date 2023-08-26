const conn = require("../components/ConnectDataBase");
const { app } = require("../components/ServerStart");

function GetData(path, sql) {
  app.get(path, (req, res) => {
    // Выполнение запроса к базе данных
    conn.query(sql, (err, results) => {
      if (err) {
        console.error("Ошибка при получении данных из базы данных", err);
        res
          .status(500)
          .json({ error: "Ошибка при получении данных из базы данных" });
      } else {
        res.json(results);
      }
    });
  });
}

module.exports = GetData;
