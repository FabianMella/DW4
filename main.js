// import http from 'http';

// const servidor = http.createServer((req, res) => {
// res.writeHead(200, { 'Content-type': 'text/plain' });
// res.end('¡Hola, mundo!');
// });
import express from 'express';
import bodyParser from 'body-parser';
const puerto = 3200;
const app = express ();
app.use(bodyParser.json())
//Ruta principal
app.get('/', (req, res) => {
    res.send ('Hola, mundo con Express!');
    });
//Ruta de data
app.get ('/api/object' , (req, res) => {
    res.json(data);
    });
//Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor en funcionamiento en el puerto ${puerto}`);
    });    
