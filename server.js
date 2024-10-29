import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(500, { "Content-Type": "text/html" });
  res.end("<h1> Hello World! </>");
});

server.listen(PORT, () => {
  console.log(`Running port on server: ${PORT}`);
});
