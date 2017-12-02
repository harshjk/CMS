const express = require('express');
const router = express.Router();
const data = require("../data");
const structureData = data.structures;

router.get("/structures", (req, res) => {
    structureData.getAllStructures().then((response) => {
        res.status(200).json(response);
    });
});

router.get("/entries", (req, res) => {
    structureData.getStructureBySlug("slug").then((response) => {
        res.status(200).json(response);
    });
});


module.exports = router;