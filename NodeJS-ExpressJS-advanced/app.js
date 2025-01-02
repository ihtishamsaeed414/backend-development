// 11
import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  res.end("The server is running");
  console.log(req.url); //by default it give /favicon.ico and then the requested URL e.g /overview
  const pathName = req.url;

  if (pathName === "/" || "overview") {
    res.end("This is overview page");
  } else if (pathName === "product") {
    res.end("This is product page");
  } else {
    res.end("Page not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on the port", 3000);
});
