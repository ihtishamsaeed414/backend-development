// 11
import http from "http";
const server = http.createServer((req, res) => {
  res.end("The server is running");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("The server is running on port!: ", 3000);
});
