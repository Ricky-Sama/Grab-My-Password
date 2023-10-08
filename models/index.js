const User = require('./User');
const login = require('./login');

User.hasMany(login, {
    // foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

login.belongsTo(User, {
    // foreignKey: 'user_id'
});

module.exports = { User, login };