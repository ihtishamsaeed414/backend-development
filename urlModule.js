import url from "url";
const urlString = "https://wwww.google.com/search?q=hellow+world";
const urlObj = new URL(urlString);
console.log(urlObj);

// formate
console.log(url.format(urlObj));

// file url
console.log(import.meta.url);
