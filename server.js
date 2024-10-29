// setting up the server
import http from "http"; // mkaing an http server

const PORT = 8000;

const server = http.createServer((req, res) => {
  // res.write("Hello World");
  // res.setHeader("Content-Type", "text/html"); //sending header to the server
  // res.statusCode = 404; // witht the status code of 404
  res.writeHead(500, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Server Error" }));
  // res.end("<h1> Hello World </>"); //dont need to write first
});

server.listen(PORT, () => {
  console.log(`Running port on server: ${PORT}`);
});
