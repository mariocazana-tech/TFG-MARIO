import express from 'express';

const app = express();

app.get('/',(request, respose)=>{
    respose.send('Bienvenido a la clinica mario');
});

app.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
})