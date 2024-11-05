import { createServer } from "http";
const PORT = process.env.PORT;
const users = [
  { id: 1, name: "Joe" },
  { id: 2, name: "blake" },
  { id: 3, name: "drake" },
];

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(users));
      res.end();
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      const id = req.url.split("/")[3];
      const user = users.find((user) => {
        return user.id === parseInt(id); //It is important
      });
      res.setHeader("Content-Type", "application/json");
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "User not Found" }));
      }
      res.end();
    } else {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "Route not Found" }));
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
