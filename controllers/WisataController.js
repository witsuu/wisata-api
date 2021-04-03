const Wisata = require("../models/WisataSchema");
const Categories = require("../models/KategoriSchema");

const storeWisata = async (req, res) => {
  const destination = new Wisata({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const savedDestination = await destination.save();

    try {
      await Categories.findByIdAndUpdate(req.body.category_id, {
        $push: { destinations: savedDestination._id },
      });
    } catch (err) {
      res.send("Error:" + err);
    }

    res.send(savedDestination);
  } catch (err) {
    res.status(400).send("Error:" + err);
  }
};

const getWisataById = async (req, res) => {
  const wisata = await Wisata.findById(req.params.id);

  res.send(wisata);
};

const getAllWisata = async (req, res) => {
  const destinations = await Wisata.find();

  res.send(destinations);
};

const getWisataWithPaging = (req, res, next) => {
  let currentPage = req.query.page;
  let perPage = req.query.per;

  try {
    const destinations = Wisata.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);
    const totalDestiny = Wisata.find().countDocuments();

    res.send({
      message: "Fetch data destination with pagination",
      destinations: destinations,
      currentPage: currentPage,
      maxPage: Math.ceil(totalDestiny / perPage),
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  storeWisata,
  getWisataById,
  getAllWisata,
  getWisataWithPaging,
};
