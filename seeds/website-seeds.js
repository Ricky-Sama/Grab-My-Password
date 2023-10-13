const { Website } = require('../models');

const websiteData = [
    {
      website_name: 'Google',
      website_url: 'https://www.google.com/',
      username: 'test1',
      password: 'test1234',
      user_id: 1,
      
    },
];

const seedWebsite = () => Website.bulkCreate(websiteData);

module.exports = seedWebsite;