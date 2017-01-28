module.exports = function (sequelize, Datatypes) {
	var Task = sequelize.define("Task", {
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
	},
	{
      // We're saying that we want our Task to be part of many
      classMethods: {
      	associate: function(models) {
          // Challenges should be able to existm without User
          Task.belongsToMany(models.User);
      }
  }
}, {
	classMethods: {
		associate: function(models) {
			Task.belongsTo(models.Challenges);
		}
	}
});
	return Task;
};