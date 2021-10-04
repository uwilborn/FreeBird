const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const siteSchema = new Schema({
  type: {type: String, required: true},
  site_name: {type: String, required: true, unique: true},
  site_location: {type: String, required: true, unique: true},
  site_url: {type: String, required: true, unique: true},
  site_address: 
    { type: {type: String},
      line1: {type: String},
      line2: {type: String},
      line3: {type: String},
      city: {type: String},
      statecode: {type: String},
      postalcode: {type: String},
    },
description: {type: String, required: true, unique: true},
});


const Park = model('Park', siteSchema);

module.exports = Park;
