import { Router } from "express";
import * as patientController from './patient.controller';
import { validateCreatePatient } from './patient.validation.middleware';

const router = Router();

router.get('/', patientController.getPatients);
router.get('/:id', patientController.getPatientById);
router.post('/', validateCreatePatient, patientController.createPatient);
router.patch('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);


export default router;