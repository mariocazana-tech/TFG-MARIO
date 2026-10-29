import { Request, Response, NextFunction } from 'express';

export function validateCreatePatient(req: Request, res: Response, next: NextFunction) {
    if (typeof req.body.name !== 'string' || typeof req.body.age !== 'number') {
        return res.status(400).json({ error: 'name debe ser texto y age un número' });
    }
    next();
}