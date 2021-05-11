const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    title: String,
    description: String,
    price: String,
    img: String,
    user: String,
    location: String,
    condition: String,
    pickup: String,
    shipping: String,
    favourites: String,
    cart: String,
    id: String,
  },
  {
    timestamps: false,
  }
);

// singular capitalized name for the mongo collection - Writer
module.exports = mongoose.model("Product", ProductSchema);
