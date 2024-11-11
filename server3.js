import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;
let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
];

// http://localhost:8080/api/posts?limit=2
app.get("/api/posts", (req, res) => {
  console.log(req.query);
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
