import fs from "fs";
// syncfile reading
// const textIn = fs.readFileSync("./Text/input.txt", "utf-8");
// console.log(textIn);

// writing to the file

// const textOut = `In Titanic Rose says: ${textIn}`;
// fs.writeFileSync("./Text/Write.txt", textOut);
// console.log("Wrote to the file successfully");

//Non blocking asynchronous way
fs.readFile("./Text/input.txt", "utf-8", (err, data) => {
  if (err) return console.log("Error");
  console.log(data);
});

fs.writeFile(
  "./Text/asyncWrite.txt",
  "I am asyncrhonous function",
  "utf-8",
  (err) => {
    console.log("The data has been written!");
  }
);
