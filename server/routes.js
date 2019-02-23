const routes = [
  {
    path: "/",
    method: "GET",
    handler: (req, h) => {
      return "Hello from Hapi.";
    }
  }
];

module.exports = routes;
