const express = require('express');
const cors = require('cors');
const app = express();


// para antener el oreden crear secciones
//settings configurar el servidor

app.set('port', process.env.PORT || 4000);
// voy al lugar donde llamo app (index), en fun main
//process.env.PORT , es por si existe en .env algun puerto de amazon service o heroku o que se yo 



//middlewares definir algunas fun antes de que lleguen a la ruta
// los middlewares son fun que se ej antes de llegar a la ruta o url
//cors permite que dos servidores intercambien datos

app.use(cors());
// desde express su metodo json 
app.use(express.json());

//routes  secciones de la app
// las url que la aplicaion de reat podra visitar
app.use('/api/users',require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));

/* 
esto se separa c/u en un archivo
en notes.js y users.js
app.get('/api/users',(req, res) => res.send('Users Routes'))
app.get('/api/notes',(req, res) => res.send('Notes Routes'))

probando
app.get('/users',(req, res) => res.send('Users Routes'))
app.get('/notes',(req, res) => res.send('Notes Routes')) */




module.exports = app;