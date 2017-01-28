module.exports = function (sequelize, Datatypes) {
	var Challenge = sequelize.define("Challenge", {
		challengeId: {
 		// foreign key to challenges model
 	},
 	countComplete: {
 		type: Datatypes.INTEGER
 	},
 	targetComplete: {
 		type: Datatypes.INTEGER
 	},
 	taskDate: {
 		type: Datatypes.DATE
 	},
 	taskEnd: {
 		type: Datatypes.DATE
 	}
 });
	return Task;
};