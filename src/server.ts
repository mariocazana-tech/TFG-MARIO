import express from 'express';

const app = express();

app.get('/',(request, response)=>{
    response.send('Bienvenido a la clinica mario');
});

app.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
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