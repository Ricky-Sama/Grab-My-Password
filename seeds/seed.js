// const sequelize = require('../config/connection');
require('dotenv').config();
const { User, Website } = require('../models');
const seedUser = require('./user-seeds.json');
const seedWebsite = require('./website-seeds.json');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

  for (const project of seedWebsite) {
    await Website.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

    process.exit(0);
  };
  
  seedDatabase();