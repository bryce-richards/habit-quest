/*jshint esversion: 6*/
const bcrypt = require('bcrypt');
// User table model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
  // Giving the User model a name of type STRING
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
    }
},{
      // We're saying that we want our User to have Challenges
      classMethods: {
        associate: function(models) {

          User.hasMany(models.Challenge);

        }
      },
      // adding instance method to compare hashed password with what the user provided on login
      instanceMethods: {
        comparePassword : function(candidatePassword, cb) {
           bcrypt.compare(candidatePassword, this.getDataValue('password'), function(err, isMatch) {
               if(err) return cb(err);
               cb(null, isMatch);
           });
          }
      }
});
  return User;
};
