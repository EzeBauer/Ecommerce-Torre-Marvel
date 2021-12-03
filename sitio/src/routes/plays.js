const express = require("express");
const router = express.Router();

const {
  kids, 
  quiz
} = require("../controllers/playsController");

/* /plays */
router.get("/kids", kids);
router.get("/quiz", quiz);


module.exports = router;
