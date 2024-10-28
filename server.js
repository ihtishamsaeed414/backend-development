// setting up the server
import http from "http";

const PORT = 4000;

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Running port on server: ${PORT}`);
});
