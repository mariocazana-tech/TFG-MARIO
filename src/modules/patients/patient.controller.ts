import { Request, Response } from 'express';
import * as patientService from './patient.service';

export async function getPatients(req: Request, res: Response){
    try{
        const patients = await patientService.listPatients();
        res.json(patients);
    } catch (error){
        res.status(500).json({ error: 'Error del servidor'});
    }
}

export async function getPatientById(req: Request, res: Response){
    try{
    const id = Number(req.params.id);
    if (!Number.isInteger(id)){
        return res.status(400).json({ error: 'El id debe ser un número' });
    }
    const patient = await patientService.getPatient(id);
    if(patient === undefined){
        return res.status(404).json({error: 'Paciente no encontrado'});
    }
    res.json(patient);
    }catch (eror){
        res.status(500).json({ error: 'Error del servidor'});
    }
}

export async function createPatient(req: Request, res: Response){
    try{
        if (typeof req.body.name !== 'string' || typeof req.body.age !== 'number') {
            return res.status(400).json({ error: 'name debe ser texto y age un número' });

        }
        const newPatient = await patientService.createPatient(req.body.name, req.body.age);
        res.status(201).json(newPatient);
    }catch (error){
        console.error(error);
        res.status(500).json({ error: 'Error del servidor'});
    } 
}

export async function updatePatient(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        if (!Number.isInteger(id)){
        return res.status(400).json({ error: 'El id debe ser un número' });
    }
    const patient = await patientService.updatePatient(id, req.body.name, req.body.age);
    if(patient === undefined){
        return res.status(404).json({error: 'Paciente no encontrado'});
    }
    res.json(patient);
    }catch (error){
        res.status(500).json({ error: 'Error del servidor'});
    }
}

export async function deletePatient(req: Request, res: Response){
    try{
        const id = Number(req.params.id);
        if (!Number.isInteger(id)){
        return res.status(400).json({ error: 'El id debe ser un número' });
    }
    const deleted = await patientService.deletePatient(id);
    if(deleted === false){
        return res.status(404).json({error: 'Paciente no encontrado'});
    }
    res.status(204).send();
    }catch (error){
        res.status(500).json({ error: 'Error del servidor'});
    }
}