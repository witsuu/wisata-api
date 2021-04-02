const Route = require("express").Router();
const {
  getAllCategori,
  storeCategory,
  getCategoryById,
} = require("../controllers/CategoriesController");
const {
  storeWisata,
  getWisataById,
  getAllWisata,
} = require("../controllers/WisataController");

Route.get("/", (req, res) => res.send("api connected"));
Route.post("/categories", storeCategory);
Route.get("/categories", getAllCategori);
Route.get("/categories/:id", getCategoryById);
Route.post("/destination", storeWisata);
Route.get("/destination/:id", getWisataById);
Route.get("destination", getAllWisata);

module.exports = Route;
