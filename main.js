import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs"); // set ejs as view engine
app.set("views", path.join(__dirname, "ejs_modules"));

app.use(express.static(__dirname + '/css'));

app.get("/", (req, res) => {
    res.render("index");
  res.sendFile("./index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

