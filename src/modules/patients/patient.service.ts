import * as patientRepository from './infra/repositories/patient.repository';

export function listPatients(){
    return patientRepository.findAll();
}

export function getPatient(id: number){
    return patientRepository.findById(id);
}

export function createPatient(name: string, age: number){
    return patientRepository.create(name, age);
}

export function updatePatient(id: number, name?: string, age?: number){
    return patientRepository.update(id, name, age);
}

export function deletePatient(id: number){
    return patientRepository.remove(id);
}