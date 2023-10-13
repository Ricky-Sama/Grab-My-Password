const { User } = require('../models');

const userData = [
    {
        username: 'test1',
        email: 'test1@gmail.com',
        password: 'test1234',
    }, 
     
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;