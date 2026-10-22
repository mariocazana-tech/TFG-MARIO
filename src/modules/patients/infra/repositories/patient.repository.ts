import { push } from 'stream/iter';
import { Patient } from '../../types/patient.types';

let patients: Patient[] = [
    {id: 1, name: 'Arturo', age: 20},
    {id: 2, name: 'Pedro', age: 21},
];
let nextId = 3;

export function findAll(): Patient[]{
    return patients;
}

export function findById(id: number): Patient | undefined {
    for (const patient of patients){
        if (patient.id === id){
            return patient;
        }
    }
    return undefined;
}

export function create(name: string, age: number): Patient{
    const newPatient: Patient = {
        id: nextId,
        name: name,
        age: age,
    };
    patients.push(newPatient);
    nextId = nextId + 1;
    return newPatient;
}

export function update(id: number, name?: string, age?: number): Patient | undefined{
    const patient = findById(id);
    if(patient === undefined){
        return undefined;
    }
    if(name !== undefined){
        patient.name = name;
    }
    if(age !== undefined){
        patient.age = age;
    }
    return patient;
}

export function remove(id: number): boolean{
    const patient = findById(id);
    if (patient === undefined){
        return false;
    }
    const remaining: Patient[] = [];
    for(const patient of patients){
        if(patient.id !== id){
            remaining.push(patient);
        }
    }
    patients = remaining;
    return true;
}