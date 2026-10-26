import * as patientRepository from './infra/repositories/patient.repository';

export async function listPatients(){
    return await patientRepository.findAll();
}

export async function getPatient(id: number){
    return await patientRepository.findById(id);
}

export async function createPatient(name: string, age: number){
    return await patientRepository.create(name, age);
}

export function updatePatient(id: number, name?: string, age?: number){
    return patientRepository.update(id, name, age);
}

export async function deletePatient(id: number){
    return await patientRepository.remove(id);
}