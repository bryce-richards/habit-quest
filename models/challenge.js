// Challenge table model
module.exports = function (sequelize, DataTypes) {
 var Challenge = sequelize.define("Challenge", {
 	// Giving the Challenge model a name of type STRING
    challenge: {
    	type: DataTypes.STRING,
    	allowNull: false
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
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    challengeImageUrl: {
        type: DataTypes.STRING
    }
 }, {
      // We're saying that we want our Task to be part of many
      classMethods: {
        associate: function(models) {
          // Challenges should be able to exist without User
          Challenge.hasMany(models.Task);
          Challenge.belongsTo(models.User);
      }
  }
});
 return Challenge;
};

