const seedUser = require('./user-seeds');
const seedWebsite = require('./website-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');
  
    await seedWebsite();
    console.log('\n----- WEBSITE SEEDED -----\n');
  
  
    process.exit(0);
  };
  
  seedAll();
  