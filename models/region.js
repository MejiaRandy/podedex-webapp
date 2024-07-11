module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define('Region', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    Region.associate = function(models) {
      Region.hasMany(models.Pokemon, { foreignKey: 'regionId' });
    };
    return Region;
  };  