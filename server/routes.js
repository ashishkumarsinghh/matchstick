const routes = [
  {
    path: "/api/",
    method: "GET",
    handler: (req, h) => {
      return "Welcome to Matchstick API.";
    }
  }
];

module.exports = routes;
