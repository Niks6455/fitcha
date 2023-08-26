const bodyParser = require("body-parser");

function WriteData(app, conn, url, sql) {
  // Парсинг JSON тела запроса
  app.use(bodyParser.json());

  // Обработка POST запроса с данными из React
  app.post(url, (req, res) => {
    const id_laptop = req.body; // Получение данных из тела запроса

    // Запись данных в базу данных
    const data = id_laptop;

    conn.query(sql, data, (err, results) => {
      if (err) {
        console.error("Ошибка записи в базу данных: " + err);
        res.sendStatus(500);
        return;
      }

      console.log("Запись добавлена в базу данных");
      res.sendStatus(200);
    });
  });
}

module.exports = WriteData;
