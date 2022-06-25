const db = require('../db');

// @route   GET api/employees
// @desc    View employees
// @access  Private
exports.viewEmployees = async (req, res) => {
	try {
		const row = await db.query(`SELECT * from employees`);
		console.log(row);
		return res.status(201).json({
			success: true,
			message: '',
			employees: row.rows,
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};

// @route   POST api/employees
// @desc    Add employees
// @access  Private
exports.addEmployee = async (req, res) => {
	const {
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

// @route   GET api/employees
// @desc    View employee
// @access  Private
exports.viewEmployee = async (req, res) => {
	try {
		const row = await db.query(`SELECT * from employees WHERE emp_id = $1;`, [
			req.params.id,
		]);

		return res.status(201).json({
			success: true,
			message: '',
			employee: row?.rows,
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};

exports.protected = async (req, res) => {
	try {
		return res.status(200).json({
			info: 'protected info',
		});
	} catch (error) {
		console.log(error.message);
	}
};
