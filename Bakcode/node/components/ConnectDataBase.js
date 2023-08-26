const mysql = require("mysql");

// Создание подключения к базе данных
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "bdficha",
});

// Установка подключения
conn.connect((error) => {
  if (error) {
    console.error("Ошибка подключения к базе данных: ", error);
    return;
  }
  console.log("Успешное подключение к базе данных");
});
// Экспорт объекта подключения
module.exports = conn;
