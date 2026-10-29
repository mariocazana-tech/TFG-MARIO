import { Request, Response, NextFunction } from 'express';

export function validateCreatePatient(req: Request, res: Response, next: NextFunction) {
    if (typeof req.body.name !== 'string' || typeof req.body.age !== 'number') {
        return res.status(400).json({ error: 'name debe ser texto y age un número' });
    }
    next();
}

export function validateUpdatePatient(req: Request, res: Response, next: NextFunction){
    if (req.body.age !== undefined && typeof req.body.age !== 'number') {
    return res.status(400).json({ error: 'age debe ser un número' });
    }
    if (req.body.name !== undefined && typeof req.body.name !== 'string') {
    return res.status(400).json({ error: 'name debe ser un texto' });
    }
    next();

}