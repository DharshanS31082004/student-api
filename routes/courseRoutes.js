const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Course API working");
});

module.exports = router;