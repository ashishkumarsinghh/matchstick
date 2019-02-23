const hapi = require("hapi");
const routes = require("./routes");

const server = hapi.Server({
  host: "localhost",
  port: 3000
});

server.route(routes);

const init = async () => {
  await server.start();
  console.log(`Server running at : ${server.info.uri}`);
};

init();
