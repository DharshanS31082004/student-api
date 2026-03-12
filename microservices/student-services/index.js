const express = require("express");
const app = express();
const students = require("./students.json");

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(3003, () => {
    console.log("Student service running on port 3003");
});