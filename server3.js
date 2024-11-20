import express from "express";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
// Routes
app.use("/api/posts", posts); //this is act as a middleware and will search for the matching route
// Error handler
app.use(notFound);
app.use(errorHandler); // this must be below the above routes
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
