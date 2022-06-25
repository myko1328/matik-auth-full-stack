import {validationResult} from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const validationMiddleware = (req:Request, res:Response, next:NextFunction) => {
	let errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			errors: errors.array(),
		});
	}

	next();
};