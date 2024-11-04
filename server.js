import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("File paths:\n", __filename, "\n", __dirname);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "about.html");
      } else if (req.url === "/contact") {
        filepath = path.join(__dirname, "public", "contact.html");
      } else {
        throw new Error("Not Found");
      }
      const data = await fs.readFile(filepath);
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text" });
    res.end("server error");
  }
});

server.listen(PORT, () => {
  console.log(`Running port on server: ${PORT}`);
});
