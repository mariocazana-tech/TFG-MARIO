import { Router } from "express";
import * as patientController from './patient.controller';

const router = Router();

router.get('/', patientController.getPatients);
router.get('/:id', patientController.getPatientById);
router.post('/', patientController.createPatient);
router.patch('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);

export default router;