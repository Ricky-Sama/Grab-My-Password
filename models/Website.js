const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Website extends Model {}

Website.init(
  {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    website_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: { // Foreign Key to User model
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'website',
  }
);

// establishing relationship between tables
const User = require('./User');  // Import User model
Website.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',  // ensures that a website's data also gets deleted when the user is deleted
});

module.exports = Website;
