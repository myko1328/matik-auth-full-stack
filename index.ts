import express, { Express } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import passport from 'passport'

//routers
import authRouter from './src/routes/auth';
import employeeRouter from './src/routes/employee';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(passport.initialize());

app.use('/api/auth', authRouter)
app.use('/api/employee', employeeRouter)

const appStart = () => {
	try {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
	} catch (error: any) {
		console.log(`Error: ${error.message}`);
	}
};

appStart();

