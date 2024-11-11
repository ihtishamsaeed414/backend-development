import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));
// i can see the home page but now for contact i have to hit /contact.html

app.listen(8000, () => console.log(`Server is running on port 8000`));
