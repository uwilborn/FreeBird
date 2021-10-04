const db = require('../config/connection');
const { User, Park } = require('../models');
const userSeeds = require('./userSeeds.json');
const siteSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
