import { createServer } from "http";
const PORT = process.env.PORT;
const users = [
  { id: 1, name: "Joe" },
  { id: 2, name: "blake" },
  { id: 3, name: "drake" },
];

// logger middlware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//json middlware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// GET users middlware
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};
// GET user by id
const usersByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => {
    return user.id === parseInt(id); //It is important
  });
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not Found" }));
  }
  res.end();
};
// POST middlware for users
const createUsersHandler = (req, res) => {
  let body = "";
  // listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    //the on method is on req not response
    const newUser = JSON.parse(body); //converting JSON to javascript object
    users.push(newUser); //idealy will send this to mongodb
    res.statusCode = 201;
    res.write(JSON.stringify(newUser)); //it is basically a server response that something is created
    res.end();
  });
};

// Not founder middleware
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not Found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        usersByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUsersHandler(req, res); //calling the middleware with sending req, res
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
