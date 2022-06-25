import { Router } from 'express';
import * as employeeControllers from '../controllers/employee'

const employeeRouter = Router();

const { addEmployee, viewEmployee, getEmployees } = employeeControllers

employeeRouter.post('/addEmployee', addEmployee);
employeeRouter.get('/viewEmployee/:id', viewEmployee);
employeeRouter.get('/viewEmployees', getEmployees);

export = employeeRouter;