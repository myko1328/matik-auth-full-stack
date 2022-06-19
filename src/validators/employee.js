const { check } = require('express-validator');
const db = require('../db');

//check if employee exists
const employeeFirstNameExists = check('emp_first_name').custom(
	async (value) => {
		const { rows } = await db.query(
			`SELECT * from employees WHERE emp_first_name = $1`,
			[value]
		);

		if (rows.length) {
			throw new Error('Employee already exists.');
		}
	}
);

const employeeLastNameExists = check('emp_last_name').custom(async (value) => {
	const { rows } = await db.query(
		`SELECT * from employees WHERE emp_last_name = $1`,
		[value]
	);

	if (rows.length) {
		throw new Error('Employee already exists.');
	}
});

module.exports = {
	employeeValidation: [employeeFirstNameExists, employeeLastNameExists],
};
