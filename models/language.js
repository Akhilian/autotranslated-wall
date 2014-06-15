module.exports = function (sequelize, DataTypes) {
	var Language = sequelize.define('Language', {
	    name: DataTypes.STRING,
	    short_name: DataTypes.STRING,
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
	});

	return Language;
};
