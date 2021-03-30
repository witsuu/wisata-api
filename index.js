const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Route = require("./routes/api");
const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.DB_HOST,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("database connected")
);

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", Route);

app.listen(PORT, () => console.log(`Server connected on ${PORT}`));
