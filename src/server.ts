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