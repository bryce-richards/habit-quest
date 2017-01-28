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
    	// url
    }
 });
 return User;
};

