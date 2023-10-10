const User = require('./User');
const Website = require('./Website');

User.hasMany(Website, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Website.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Website };