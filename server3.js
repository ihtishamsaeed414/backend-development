import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));
// Routes
app.use("/api/posts", posts); //this is act as a middleware and will search for the matching route
// Error handler
app.use(notFound);
app.use(errorHandler); // this must be below the above routes

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
