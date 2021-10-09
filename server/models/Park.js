const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  category_type: { type: String, required: true },
  site_name: { type: String, required: true, unique: true },
  site_country: { type: String, unique: true },
  site_url: { type: String, unique: true },
  site_address: { type: String },
  description: { type: String, required: true, unique: true },
});

const Park = mongoose.model("Park", siteSchema);

module.exports = Park;
