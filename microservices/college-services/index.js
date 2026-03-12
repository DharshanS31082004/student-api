const express = require("express");
const app = express();
const colleges = require("./colleges.json");

app.get("/colleges", (req, res) => {
    res.json(colleges);
});

app.listen(3001, () => {
    console.log("College service running on port 3001");
});