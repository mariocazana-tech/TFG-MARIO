import { Patient } from '../../types/patient.types';
import { pool } from '../../../../database/pool';

export async function findAll(): Promise<Patient[]> {
  const result = await pool.query('SELECT * FROM patients');
  return result.rows; 
}
export async function findById(id: number): Promise<Patient | undefined> {
  const result = await pool.query('SELECT * FROM patients WHERE id = $1', [id]);
  return result.rows[0];
}

export async function create(name: string, age: number): Promise<Patient> {
  const result = await pool.query(
    'INSERT INTO patients (name, age) VALUES ($1, $2) RETURNING *',
    [name, age]
  );
  return result.rows[0];
}

export async function update(id: number, name?: string, age?: number): Promise<Patient | undefined> {
  const result = await pool.query(
    'UPDATE patients SET name = COALESCE($2, name), age = COALESCE($3, age) WHERE id = $1 RETURNING *',
    [id, name, age]
  );
  return result.rows[0];
}

export async function remove(id: number): Promise<boolean>{
    const result = await pool.query('DELETE FROM patients WHERE id = $1', [id]);
    return result.rowCount === 1;
}
