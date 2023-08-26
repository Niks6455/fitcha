const express = require("express");
const app = express();
const port = 3002;
const conn = require("../components/ConnectDataBase");
const WriteData = require("../api/WriteData");
const DelDataCart = require("../api/DelDataCart");
const cors = require("cors");

function serverStart() {
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  // Запуск сервера
  app.listen(port, (error) => {
    if (error) return console.log(`Ошибка при запуске сервера: ${error}`);
    console.log(`Сервер запущен на порту ${port}`);
  });
  // Разрешить доступ для всех доменов

  var url = "/api/writeusers";
  var sql = "INSERT INTO users SET ?";
  WriteData(app, conn, url, sql);

  var url = "/api/writefavorites";
  var sql = "INSERT INTO favorite SET ?";
  WriteData(app, conn, url, sql);

  var url = "/api/writemap_point";
  var sql = "INSERT INTO map_point SET ?";
  WriteData(app, conn, url, sql);

  var url = "/api/writeusers/:id";
  var sql = `DELETE FROM users WHERE id = ?`;
  DelDataCart(app, conn, url, sql);

  var url = "/api/writefavorites/:id";
  var sql = `DELETE FROM favorite WHERE id = ?`;
  DelDataCart(app, conn, url, sql);
}

module.exports = { serverStart, app };
