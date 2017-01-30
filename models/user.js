// User table model
module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define("User", {
 	// Giving the User model a name of type STRING
 	userName: {
 		type: DataTypes.STRING,
 		allowNull: false,
 	},
 	password: {
 		type: DataTypes.STRING
 	},
 	email: {
 		type: DataTypes.STRING
 	},
 	avatar: {
    	type: DataTypes.STRING
    }
},{
      // We're saying that we want our User to have Challenges
      classMethods: {
      	associate: function(models) {

          User.hasMany(models.Challenge);
          
      }
  }
});
	return User;
};

