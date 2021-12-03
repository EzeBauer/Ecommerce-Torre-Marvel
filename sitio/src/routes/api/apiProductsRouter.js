var express = require("express");
var router = express.Router();

const {
  list,
  detail,
  create,
  search,
  ropa,
  mercha,
  figuras,
  comics
} = require("../../controllers/api/apiProducts");

/* endpoints: /api/products */
router
  .get("/", list)
  .get("/search", search)
  .get("/:id", detail)
  .get("/categories/ropa", ropa)
  .get("/categories/mercha", mercha)
  .get("/categories/figuras", figuras)
  .get("/categories/comics", comics)
  .post("/", create);
 

module.exports = router;
