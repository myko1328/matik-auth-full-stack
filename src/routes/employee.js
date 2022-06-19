const { Router } = require('express');
const { addEmployee } = require('../controllers/employee');
const { userAuth } = require('../middlewares/auth-middleware');
const {
	validationMiddleware,
} = require('../middlewares/validations-middleware');
const { employeeValidation } = require('../validators/employee');

const router = Router();

router.post(
	'/addEmployee',
	employeeValidation,
	validationMiddleware,
	userAuth,
	addEmployee
);

module.exports = router;
