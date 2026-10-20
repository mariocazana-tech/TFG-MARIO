import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const app = express();
const openapiPath = path.join(__dirname, '../docs/openapi.yaml');
const openapiDocument = YAML.parse(readFileSync(openapiPath, 'utf8'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDocument));

app.get('/',(request, response)=>{
    response.send('Bienvenido a la clinica mario');
});

const patients =[
    {id: 1, name: 'Arturo', age: 20},
    {id: 2, name: 'Pedro', age: 21},
];

app.get('/patients', (request, response)=>{
    response.json(patients);
});

app.get('/patients/:id',(req,res)=>{
    const id = Number(req.params.id);
    console.log('Me han pedido el paciente', id);
    for(const patient of patients){
        if(patient.id === id){
            return res.json(patient);
        }
    }
    res.status(404).json({error: 'Paciente no encontrado'});
});

export default app;