import { hash } from 'bcryptjs';
import { Request, Response } from 'express';
import { db } from '../db';
import { sign } from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

const secret: any = process.env.SECRET;

export const getUsers = async (req: Request, res: Response) => {
    try {
		const { rows } = await db.query('select user_id, email from users');

        return res.status(200).json({
            success: true,
            users: rows,
        });
	
	} catch (error) {
		console.log(error);
	}
};

export const registerUsers = async (req: Request, res: Response): Promise<Response> => {
	const { email, password, business_name } = req.body;
	try {
		const hashedPassword = await hash(password, 10);

		await db.query(
			'insert into users(email,password,business_name) values ($1 , $2, $3)',
			[email, hashedPassword, business_name]
		);

		return res.status(201).json({
			success: true,
			message: 'The registraion was succefull',
		});

	} catch (error: any) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};

export const loginUsers = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    let user: Express.User | undefined | any = req.user;

    let payload = {
		id: user?.user_id,
		email: user?.email,
	};

	try {
		const token = await sign(payload, secret);

		return res.status(200).cookie('token', token, { httpOnly: true }).json({
			success: true,
			message: 'Logged in succefully',
		});
	} catch (error: any) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};

export const logout = (req: Request, res: Response) => {
    try {
		return res.status(200).clearCookie('token', { httpOnly: true }).json({
			success: true,
			message: 'Logged out succefully',
		});
	} catch (error: any) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	} 
}