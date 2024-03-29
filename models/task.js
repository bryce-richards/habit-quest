module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        taskName: {
            type: DataTypes.STRING
        },
        weekNum: {
            type: DataTypes.INTEGER
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
        },
        UserId: {
            type: DataTypes.INTEGER
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