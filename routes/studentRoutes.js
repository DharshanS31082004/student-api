const express = require("express");
const router = express.Router();

let students = [];

router.get("/", (req, res) => {
    res.json(students);
});

router.post("/", (req, res) => {
    const student = req.body;
    students.push(student);
    res.json(student);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    students[id] = req.body;
    res.json(students[id]);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    students.splice(id, 1);
    res.send("Student deleted");
});

router.get("/search/:name", (req, res) => {

    const name = req.params.name;

    const result = students.filter(student => student.name === name);

    res.json(result);

});

module.exports = router;