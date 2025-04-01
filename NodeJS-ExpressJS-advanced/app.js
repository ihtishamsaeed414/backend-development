// 15
const http  = require('http');
const fs = require('fs');
const url = require('url');

const replaceTemplate = (temp, product)=>{
let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); //sync fetching data since it was fetched each time the browser load - we want to load it once so kept in gloabl execution to load once althoug it is blocking but in global in will run only once and will have data vriable to use then
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url); //by default it give /favicon.ico and then the requested URL e.g /overview - hot reload
  console.log(url.parse(req.url, true));
  const {query, pathname} = url.parse(req.url, true); //full details of the url, true here is for the query (?id=0)

  if (pathname === "/" || pathname === "/overview") {

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace(`{%PRODUCT_CARDS%}`, cardsHtml);
    
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(output);

  } else if (pathname === "/product") {
    const product = dataObj[query.id]
    const output = replaceTemplate(tempProduct, product)
    res.end(output);

  }else if (pathname === "/api"){
    
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
