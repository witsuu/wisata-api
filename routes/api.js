const Route = require("express").Router();
const {
  getAllCategori,
  storeCategory,
  getCategoryById,
} = require("../controllers/CategoriesController");
const {
  storeWisata,
  getWisataById,
} = require("../controllers/WisataController");

Route.get("/", (req, res) => res.send("api connected"));
Route.post("/categories", storeCategory);
Route.get("/categories", getAllCategori);
Route.get("/categories/:id", getCategoryById);
Route.post("/destination", storeWisata);
Route.get("/destination/:id", getWisataById);

module.exports = Route;
