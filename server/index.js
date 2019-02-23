const hapi = require("hapi");
const mongoose = require("mongoose");
const routes = require("./routes");
const config = require("./config");
const db = mongoose.connection;

const server = hapi.Server({
  host: config.host,
  port: config.port
});

server.route(routes);

const initServer = async () => {
  await server.start();
  console.log(`Server running at : ${server.info.uri}`);
};

const initMongoDB = () => {
  mongoose.connect(config.dbUrl, { useNewUrlParser: true });
  db.on("error", console.error.bind(console, "Error opening db connection."));
  db.on("open", () => console.log("Succesfully opened mongodb connection."));
};

initServer();
initMongoDB();
