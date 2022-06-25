import { Request, Response } from 'express';


export const addEmployee = (req: Request, res: Response) => {
    res.status(201).json({
        success: true
    })
};

export const viewEmployee = (req: Request, res: Response) => {
    res.status(201).json({
        success: true
    })
};

export const getEmployees = (req: Request, res: Response) => {
    res.status(201).json({
        success: true
    })
};