require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");

const products = [
  {
    name: "Broccoli Microgreens",
    slug: "broccoli",
    description: "Mild, crunchy, and packed with sulforaphane.",
    price: 100,
    weight: "50g",
    image: "/images/broccoli.jpg",
    nutritionalBenefits: [
      "High in Vitamin C",
      "Rich in Sulforaphane",
      "Antioxidant Rich"
    ],
    availability: "In Stock",
    growingTime: "7–10 days",
    details: {
      healthBenefits: "Supports immunity and heart health.",
      shelfLife: "10–12 days refrigerated",
      usage: "Smoothies, salads, garnishing"
    }
  },
  {
    name: "Radish Microgreens",
    slug: "radish",
    description: "Spicy, crunchy greens with a bold kick.",
    price: 90,
    weight: "50g",
    image: "/images/radish.jpg",
    nutritionalBenefits: ["Vitamin E", "B Complex", "Zinc"],
    availability: "In Stock",
    growingTime: "6–8 days",
    details: {
      healthBenefits: "Improves digestion and metabolism.",
      shelfLife: "7–9 days refrigerated",
      usage: "Salads, wraps, tacos"
    }
  },
  {
    name: "Sunflower Microgreens",
    slug: "sunflower",
    description: "Nutty-flavored greens rich in minerals.",
    price: 110,
    weight: "50g",
    image: "/images/sunflower.jpg",
    nutritionalBenefits: ["Iron", "Magnesium", "Healthy Fats"],
    availability: "In Stock",
    growingTime: "8–12 days",
    details: {
      healthBenefits: "Boosts energy and bone health.",
      shelfLife: "10–12 days refrigerated",
      usage: "Salads, bowls, wraps"
    }
  },
  {
    name: "Pea",
    slug: "pea",
    description: "Sweet, tender, protein-rich shoots.",
    price: 120,
    weight: "50g",
    image: "/images/pea.jpg",
    nutritionalBenefits: ["Protein", "Fiber", "Vitamin A"],
    availability: "In Stock",
    growingTime: "10–14 days",
    details: {
      healthBenefits: "Supports muscle growth.",
      shelfLife: "12–14 days refrigerated",
      usage: "Stir-fries, sandwiches"
    }
  },
  {
    name: "Beetroot Microgreens",
    slug: "beetroot",
    description: "Earthy greens known for stamina.",
    price: 95,
    weight: "50g",
    image: "/images/beetroot.jpg",
    nutritionalBenefits: ["Iron", "Folate", "Antioxidants"],
    availability: "In Stock",
    growingTime: "9–12 days",
    details: {
      healthBenefits: "Improves blood circulation.",
      shelfLife: "8–10 days refrigerated",
      usage: "Smoothies, salads"
    }
  },
  {
    name: "Mustard Microgreens",
    slug: "mustard",
    description: "Bold, peppery greens.",
    price: 85,
    weight: "50g",
    image: "/images/mustard.jpg",
    nutritionalBenefits: ["Vitamin K", "Anti-inflammatory"],
    availability: "In Stock",
    growingTime: "6–8 days",
    details: {
      healthBenefits: "Boosts metabolism.",
      shelfLife: "7–9 days refrigerated",
      usage: "Sandwiches, spicy dishes"
    }
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
