const express = require("express");
const router = express.Router();
const path = require("path");

const {processEmail} = require("../../controllers/api/apiUsers");



/* /api/users*/
router.get("/email",processEmail);

module.exports = router;
