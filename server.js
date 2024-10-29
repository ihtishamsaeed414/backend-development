import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
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
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text" });
    res.end("server error"); // this is basically res.end on the browser page so it will not error it will only accept string
  }
});

server.listen(PORT, () => {
  console.log(`Running port on server: ${PORT}`);
});
