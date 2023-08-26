const { serverStart } = require("./components/ServerStart");
const GetData = require("./api/GetData");

serverStart();

path = "/api/users";
sql = "SELECT * FROM users";
GetData(path, sql);

path = "/api/maps_point";
sql = sql = "SELECT * FROM maps_point";
GetData(path, sql);

path = "/api/places";
sql = "SELECT * FROM maps_point JOIN places ON maps_point.id = places.id;";
GetData(path, sql);

path = "/api/favorite";
sql = "SELECT * FROM favorite";
GetData(path, sql);

// WriteData();
