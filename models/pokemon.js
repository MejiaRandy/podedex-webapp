module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define('Pokemon', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    Pokemon.associate = function(models) {
      Pokemon.belongsTo(models.Region, { foreignKey: 'regionId' });
      Pokemon.belongsTo(models.Type, { foreignKey: 'typeId' });
    };
    return Pokemon;
  };
  