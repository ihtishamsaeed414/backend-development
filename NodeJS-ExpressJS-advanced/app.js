// 11
import http from "http";
const server = http.createServer((req, res) => {
  // console.log(req.url); //by default it give /favicon.ico and then the requested URL e.g /overview
  let pathName = req.url;
  console.log(`Requested URL: ${pathName}`); // Debugging log
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview page");
  } else if (pathName === "/product") {
    console.log("hi");
    res.end("This is product page");
  } else {
    res.writeHead(404, {
      //The browser is now expecting the type of content in the header, html in this case
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1> Page not found! <h1/>"); //this response must come after the header
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on the port", 3000);
});

// in our routing and browser routing if we want to open a file it has nothing to do with file system in our directory we have to send special request for that file for the browser
