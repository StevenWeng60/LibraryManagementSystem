const express = require('express');
const router = express.Router();
const {queryItem} = require("../controllers/qControllers");

router.route("/query").post(queryItem);

module.exports = router;