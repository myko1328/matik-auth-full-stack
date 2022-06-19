// @route   POST api/employees
// @desc    Add employees

const db = require('../db');

// @access  Private
exports.addEmployee = async (req, res) => {
	// const { email, password, business_name } = req.body;
	const {
		// user_id,
		emp_first_name,
		emp_last_name,
		emp_age,
		emp_position,
		emp_date_hired,
		emp_current_rate,
	} = req.body;
	try {
		await db.query(
			`insert into employees (
		        user_id,
		        emp_first_name,
		        emp_last_name,
		        emp_age,
		        emp_position,
		        emp_date_hired,
		        emp_current_rate ) values (
		            $1, $2, $3, $4, $5, $6, $7
		        )`,
			[
				req.user.id,
				emp_first_name,
				emp_last_name,
				emp_age,
				emp_position,
				emp_date_hired,
				emp_current_rate,
			]
		);

		return res.status(201).json({
			success: true,
			message: 'Employee successfully created.',
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};
