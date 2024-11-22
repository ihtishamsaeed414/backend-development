import express from "express";

const app = express();
const PORT = 8000;

// config ejs
app.set("view engine", "ejs");
app.set("views", "views"); // setting the views as a folder for ejs

app.get("/", (req, res) => {
  // assume the data from database
  res.render("index", {
    title: "my website", //custome title
    message: "Hello from EJS",
    people: ["khan", "ali"], // we can also send array
  }); //look for the index
});

app.listen(PORT, () => {
  console.log("server running on PORT: ", PORT);
});
