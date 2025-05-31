const express = require("express");
const router = express.Router();
const {generateReadme} = require("../controllers/readmeControllers");

router.post("/generate", generateReadme);

module.exports = router;
