const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    weight: { type: String },
    image: { type: String },
    nutritionalBenefits: [String],
    availability: { type: String },
    growingTime: { type: String },
    details: {
      healthBenefits: String,
      shelfLife: String,
      usage: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
