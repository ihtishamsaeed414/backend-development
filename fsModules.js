// import fs from "fs";
import fs from "fs/promises";

// readFile asyncrhonous - callback
// fs.readFile("./orders.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync - syncrhonous verison

// const data = fs.readFileSync("./orders.txt", "utf8");
// console.log(data);

// fs modules using promises
fs.readFile("./orders.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console(err));

//   fs using async await
const readFile = async () => {
  try {
    const data = await fs.readFile("./orders.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writing to file
const writeFile = async () => {
  try {
    await fs.writeFile("./orders.txt", "Writing to the orders file");
    console.log("File Written");
  } catch (error) {
    console.log(error);
  }
};

// appendFile
const appendFile = async () => {
  try {
    await fs.appendFile("./orders.txt", "\nThis is append text");
    console.log("File appended to ...");
  } catch (error) {
    console.log(error);
  }
};
writeFile();
appendFile();
readFile();
