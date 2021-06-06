require("./db/conn");
const express = require("express");
const app = express();
const path = require("path")
const port = process.env.PORT || 3000;
const hbs = require("hbs")
const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
console.log(static_path)
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", view_path);
hbs.registerPartials(partials_path);
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/register', (req, res) => {
    res.render("register")
});

app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
});