module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define('Type', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    Type.associate = function(models) {
      Type.hasMany(models.Pokemon, { foreignKey: 'typeId' });
    };
    return Type;
  };
  