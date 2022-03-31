import productsJson from "../assets/data/products.json";

const filtersVals = {
  multiRange: ["All", "<= $10", "$10 - $100", "$100 - $500", ">=$500"],
  brands: Array.from(new Set(productsJson.products.map((p) => p.brand))),
  categories: [
    "Appliances",
    "Audio",
    "Cameras & Camcoders",
    "Car Electronics & GPS",
    "Cell Phones",
    "Computers & Tablets",
    "Health, Fitness & Beauty",
    "Office & School Supplies",
    "TV & Home Theater",
    "Video Games",
  ],
};

export default filtersVals;
