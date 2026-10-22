import patientRoutes from './modules/patients/patient.routes';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const app = express();
app.use(express.json());
const openapiPath = path.join(__dirname, '../docs/openapi.yaml');
const openapiDocument = YAML.parse(readFileSync(openapiPath, 'utf8'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDocument));

app.get('/',(request, response)=>{
    response.send('Bienvenido a la clinica mario');
});

app.use('/patients', patientRoutes);
export default app;