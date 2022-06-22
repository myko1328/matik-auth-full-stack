const { Router } = require('express');
const {
	addEmployee,
	viewEmployee,
	viewEmployees,
	protected,
} = require('../controllers/employee');

const { userAuth } = require('../middlewares/auth-middleware');
const {
	validationMiddleware,
} = require('../middlewares/validations-middleware');
const { employeeValidation } = require('../validators/employee');

const router = Router();

router.post(
	'/addEmployee',
	protected,
	userAuth,
	employeeValidation,
	validationMiddleware,
	addEmployee
);

router.get('/viewEmployee/:id', protected, userAuth, viewEmployee);
router.get('/viewEmployees', protected, userAuth, viewEmployees);

module.exports = router;
