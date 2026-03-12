const express = require("express");
const app = express();
const courses = require("./courses.json");

app.get("/courses", (req, res) => {
    res.json(courses);
});

app.listen(3002, () => {
    console.log("Course service running on port 3002");
});