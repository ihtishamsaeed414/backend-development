import fs from "fs";
// syncfile reading
const textIn = fs.readFileSync("./Text/input.txt", "utf-8");
console.log(textIn);

// writing to the file

const textOut = `In Titanic Rose says: ${textIn}`;
fs.writeFileSync("./Text/Write.txt", textOut);
console.log("Wrote to the file successfully");
