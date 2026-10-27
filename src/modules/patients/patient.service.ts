import * as patientRepository from './infra/repositories/patient.repository';

export async function listPatients(name?: string){
    return await patientRepository.findAll(name);
}

export async function getPatient(id: number){
    return await patientRepository.findById(id);
}

export async function createPatient(name: string, age: number){
    return await patientRepository.create(name, age);
}

export async function updatePatient(id: number, name?: string, age?: number){
    return await patientRepository.update(id, name, age);
}

export async function deletePatient(id: number){
    return await patientRepository.remove(id);
}