const PORT = 4000;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    let rand_num = (Math.random() * 10) + 1;
    rand_num = Math.floor(rand_num);
    res.send(`Your random number is: ${rand_num}`);
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}.`);
});