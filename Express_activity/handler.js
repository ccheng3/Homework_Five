const PORT = 4000;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// tell express to also anticipate reading from JSON file
app.use(express.json());

// add handlebars template engine 
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get("/search", function (req, res) {
    let qParams = "";
    const { key1 } = req.query;
    const { key2 } = req.query;
    console.log(req.query);
    if (!key1 && !key2) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED!!");
    }
    else {
        // for (var key in req.query) {
        //     qParams += `The key: ${key} contains the value: ${req.query[key]}<br>`;
        // }
        // console.log(`You made a GET request`);
        // res.send(qParams);
        res.render("get", req.query);
    }
});

app.get("/", function (req, res) {
    // res.send("This is the homepage!");
    // res.sendFile(__dirname + "/index.html");
    // switch the res.sendFile to rendering the "home" HBS layout
    res.render("home");
});

app.get("/cats", function (req, res) {
    console.log(`You made a GET request`);
    res.send("Hello from GET request.");
});

app.post("/", function (req, res) {

    let qParams = "";
    // POST request sends data thru the request body, not thru request header
    // for security reasons 
    const { key1 } = req.body;
    const { key2 } = req.body;
    if (!key1 && !key2) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED!!");
    }
    else {
        // for (var key in req.body) {
        //     qParams += `The key: ${key} contains the value: ${req.body[key]}<br>`;
        //     qParams += '\n';
        // }
        // console.log(`You made a POST request`);
        // res.send(qParams);
        res.render("post", req.body);
    }
});

app.get("*", function (req, res) {
    // res.send("404 Error: The URL you requested does not exist.");
    // switch the res.send to rendering a HBS layout
    res.render("404");
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}.`);
});