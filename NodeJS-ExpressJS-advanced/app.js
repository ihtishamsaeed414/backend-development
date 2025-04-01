// 11
const http  = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); //sync fetching data since it was fetched each time the browser load - we want to load it once so kept in gloabl execution to load once althoug it is blocking but in global in will run only once and will have data vriable to use then
const dataObj = JSON.parse(data);

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
res.writeHead(200, {'content-type': 'application/json'});
res.end(dataObj);
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
