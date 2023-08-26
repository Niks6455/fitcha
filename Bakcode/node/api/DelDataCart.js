const bodyParser = require("body-parser");

function DelDataCart(app, conn, url, sql) {
  // Парсинг JSON тела запроса
  app.use(bodyParser.json());

  // Обработка POST запроса с данными из React
  app.delete(url, (req, res) => {
    // const id_laptop = req.body; // Получение данных из тела запроса
    var id = req.params.id;
    id = id.replace(":", "");
    // Запись данных в базу данных
    const query = sql;

    conn.query(query, [id], (err, result) => {
      if (err) throw err;

      console.log("запись удаленна");
      res.send("Data deleted successfully.");
    });
  });
}

module.exports = DelDataCart;
