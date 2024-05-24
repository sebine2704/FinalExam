const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const { Schema } = mongoose;



const ProductsSchema = new Schema({
  img: { type: String, require: true },
  title: { type: String, require: true },
  price: { type: Number, require: true },
});
const Products = mongoose.model("MyProducts", ProductsSchema);

app.get("/products", async (req, res) => {
  const getdata = await Products.find({});
  res.status(200).send(getdata);
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const getiddata = await Products.findById(id);
  res.status(200).send(getiddata);
});


app.post("/products", async (req, res) => {
  const { img, title, price } = req.body;
  const postProducts = new Products({
    img,
    title,
    price,
  });
  await postProducts.save();
  res.status(201).send(postProducts);
});


app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProducts = await Products.findByIdAndDelete(id);
  res.status(200).send(deleteProducts);
});
const PORT = process.env.PORT;
const DB = process.env.DB_URL;

mongoose.connect(DB).then(() => console.log("Connected!"));
app.listen(PORT, console.log("Port is active", PORT));
