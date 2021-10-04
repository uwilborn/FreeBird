const db = require('../config/connection');
const { User, Park } = require('../models');
const userSeeds = require('./userSeeds.json');
const siteSeeds = require('./siteSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Park.deleteMany({});
    await Park.create(siteSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
