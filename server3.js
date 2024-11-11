import express from "express";
const app = express();

// Simple Get method routes
app.get("/", (req, res) => {
  // Here now we dont need to specify text
  //   res.send("Hello world");
  //   res.send("<h1>Hello world</h1>");
  //   res.send({ message: "Hellow world" }); //we can also send json
  res.send("Checking the watch flag");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});
app.listen(8000, () => console.log(`Server is running on port 8000`));
