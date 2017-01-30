module.exports = function(sequelize, DataTypes) {
  var Challenge = sequelize.define('Challenge', {
    title: DataTypes.STRING,
  });
  return Challenge;
}
