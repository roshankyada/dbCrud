module.exports = function (sequelize, DataTypes) {
  const bott = sequelize.define(
    "bott",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER(25),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "bott",
      timestamps: false,
    }
  );

  bott.associate = function (models) {
    bott.hasMany(models.user, { foreignKey: "type", as: "user" });
  };

  return bott;
};
