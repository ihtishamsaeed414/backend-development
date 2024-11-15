import express from "express";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
// Routes
app.use("/api/posts", posts); //this is act as a middleware and will search for the matching route
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
