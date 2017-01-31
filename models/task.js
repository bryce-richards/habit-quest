module.exports = function (sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		taskName: {
			type: DataTypes.STRING
		},
		countComplete: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		targetComplete: {
			type: DataTypes.INTEGER
		},
		taskDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
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