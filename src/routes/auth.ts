import { Router } from 'express';
import * as authControllers from '../controllers/auth'
import { validationMiddleware } from '../middlewares/validations-middleware';
import { validation } from '../validators/auth';

const authRouter = Router();

const { getUsers, registerUsers, loginUsers } = authControllers

authRouter.get('/get-users', getUsers);

authRouter.post('/register', 
        validation.registerValidation, 
        validationMiddleware, 
        registerUsers
    );

authRouter.post('/login', 
    validation.loginValidation, 
    validationMiddleware, 
    loginUsers
);

authRouter.get('/logout', authControllers.logout);

export = authRouter;