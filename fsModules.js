import fs from "fs";

// readFile asyncrhonous  - callback
fs.readFile("./orders.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// readFileSync - syncrhonous verison

const data = fs.readFileSync("./orders.txt", "utf8");
console.log(data);
