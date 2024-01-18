const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./index");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "user",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bott", // Name of the table in the database
          key: "id",
        },
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "user",
    }
  );

  User.associate = function (model) {
    User.belongsTo(model.bott, { foreignKey: "type", as: "bottData" });
  };

  return User;
};
