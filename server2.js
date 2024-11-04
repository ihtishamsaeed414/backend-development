import { createServer } from "http";
const PORT = process.env.PORT;
const users = [
  { id: 1, name: "Joe" },
  { id: 2, name: "blake" },
  { id: 3, name: "drake" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not Found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
