import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1> I am Home </>");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1> I am about page </>");
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1> I am contact page </>");
    }
  } catch (error) {
    throw new Error("internal server error");
  }
});

server.listen(PORT, () => {
  console.log(`Running port on server: ${PORT}`);
});
