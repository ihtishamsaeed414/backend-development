// 11
const http  = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url); //by default it give /favicon.ico and then the requested URL e.g /overview - hot reload
  let pathName = req.url;
  console.log(`Requested URL: ${pathName}`); // Debugging log
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview page");
  } else if (pathName === "/product") {
    console.log("hi");1
    res.end("This is product page!");
  }else if (pathName === "/api"){
    console.log("HI");
fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
const productData = JSON.parse(data); //converting to JS object since we will get this from the api in our app
console.log(data); //Json formate(double quotes - browser accept))
res.writeHead(200, {'content-type': 'application/json'});
res.end(data);
})
  }else {
    res.writeHead(404, { //writeHead for the setting the headers
      //The browser is now expecting the type of content in the header, html in this case
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h2> Page not found ?<h2/>"); //this response must come after the header
  }
});
server.listen(3000, "127.0.0.1", () => {
  console.log("Server is up on the port no:", 3000);
});

// In our routing and browser routing if we want to open a file it has nothing to do with file system in our directory we have to send special request for that file for the browser
