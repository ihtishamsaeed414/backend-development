import express from "express";

const app = express();
const PORT = 8000;

// config ejs
app.set("view engine", "ejs");
app.set("views", "views"); // setting the views as a folder for ejs

app.get("/", (req, res) => {
  res.render("index"); //look for the index
});

app.listen(PORT, () => {
  console.log("server running on PORT: ", PORT);
});
