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

const getAllWisata = async () => {
  const destinations = await Wisata.find();

  res.send(destinations);
};

module.exports = {
  storeWisata,
  getWisataById,
  getAllWisata,
};
