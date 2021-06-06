require("./db/conn");
const express = require("express");
const app = express();
const path = require("path")
const port = process.env.PORT || 3000;
const hbs = require("hbs")
const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
const Register = require("./models/register");


console.log(static_path)
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", view_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/register', (req, res) => {
    res.render("register")
});

app.post('/register', async(req, res) => {
    try {
        a = req.body;
        // console.log("OK");
        console.log(a.password);
        console.log(a.confirmpassword);
        if (a.password == a.comfirmpassword) {
            console.log("ok");
            const entry = new Register({
                name : a.name, email : a.email, number : a.number, stid  : a.stid, password  : a.password,
                confirmpassword  : a.confirmpassword, gender  : a.gender
            })
            console.log("ok");
            const registered = await entry.save();
            res.status(201).render("index");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
});