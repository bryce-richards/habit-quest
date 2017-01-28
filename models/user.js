// User table model
module.exports = function (sequelize, Datatypes) {
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
    	type: Datatypes.STRING
    }
},{
      // We're saying that we want our User to have Challenges
      classMethods: {
      	associate: function(models) {
          // Challenges should be able to existm without User
          User.hasMany(models.Challenges);
      }
  }
  },{
      // We're saying that we want our User to have Tasks
      classMethods: {
      	associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          User.hasMany(models.Task);
      }
  }
});
	return User;
};

