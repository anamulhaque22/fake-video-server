const data = require("./db_videos.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5050;

server.use(middlewares);
server.use(router);

server.listen(port);
