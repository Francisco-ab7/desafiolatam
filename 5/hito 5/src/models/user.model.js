const { DataTypes } = require('sequelize');
const sequelize  = require("../databases/configdb.js");
const bcrypt = require('bcryptjs/dist/bcrypt.js');

const Users = sequelize.define("Users", {
 id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true,
 },
 name: {
 type: DataTypes.STRING,
 unique: true
 },
 login: {
 type: DataTypes.STRING,
 unique: true
 },
 password: {
 type: DataTypes.STRING,
 },
 email: {
 type: DataTypes.STRING,
 unique: true
 },
});

Users.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 8); });

Users.beforeUpdate(async (user) => {
    user.password = await bcrypt.hash(user.password, 8);
});

module.exports = Users