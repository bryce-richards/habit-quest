// Challenge table model
module.exports = function (sequelize, Datatypes) {
 var Challenge = sequelize.define("Challenge", {
 	// Giving the Challenge model a name of type STRING
    challenge: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    userId: {
        // Grab id from the Users table
    },
    title: {
    	type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    purpose: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    private: {
        type: Datatypes.BOOLEAN,
        defaultValue: true
    },
    image: {
        type: Datatypes.STRING
    }
 });
 return Challenge;
};