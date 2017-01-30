module.exports = function (sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		taskName: {
			type: DataTypes.STRING
		},
		countComplete: {
			type: DataTypes.INTEGER
		},
		targetComplete: {
			type: DataTypes.INTEGER
		},
		taskDate: {
			type: DataTypes.DATEONLY
		},
		taskEnd: {
			type: DataTypes.DATEONLY
		}
	}, {
	classMethods: {
		associate: function(models) {
			Task.belongsTo(models.Challenge);
		}
	}
});
	return Task;
};