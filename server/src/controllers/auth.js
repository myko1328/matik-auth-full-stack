const db = require('../db');

exports.getUsers = (req, res) => {
	try {
		db.query('select * from ');
	} catch (error) {
		console.log(error.message);
	}
};
