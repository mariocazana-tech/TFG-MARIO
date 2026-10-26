import { Request, Response } from 'express';
import * as patientService from './patient.service';
import { remove } from './infra/repositories/patient.repository';

export async function getPatients(req: Request, res: Response){
    try{
        const patients = await patientService.listPatients();
        res.json(patients);
    } catch (error){
        res.status(500).json({ error: 'Error del servidor'});
    }
}

export function getPatientById(req: Request, res: Response){
    const id = Number(req.params.id);
    const patient = patientService.getPatient(id);
    if(patient === undefined){
        return res.status(404).json({error: 'Paciente no encontrado'});
    }
    res.json(patient);
}

export function createPatient(req: Request, res: Response){
    const newPatient = patientService.createPatient(req.body.name, req.body.age);
    res.status(201).json(newPatient);
}

export function updatePatient(req: Request, res: Response){
    const id = Number(req.params.id);
    const patient = patientService.updatePatient(id, req.body.name, req.body.age);
    if(patient === undefined){
        return res.status(404).json({error: 'Paciente no encontrado'});
    }
    res.json(patient);
}

export function deletePatient(req: Request, res: Response){
    const id = Number(req.params.id);
    const deleted = patientService.deletePatient(id);
    if(deleted === false){
        return res.status(404).json({error: 'Paciente no encontrado'});
    }
    res.status(204).send();
}