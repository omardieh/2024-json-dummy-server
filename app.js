require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);
server.use(morgan("dev"));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("listening on port: " + port);
});
