const mongoose = require('mongoose');

// de mi entorno llamo a la var
//console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI : ' mongodb://localhost/databasetest';

mongoose.connect(URI,{
    //PARA QU MOONGOSE SE PUEDA CONECTAR ,Tener cadena de conexión
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: false

});

const connection = mongoose.connection;

connection.once('open',() =>{
    console.log('DB is connected')
});

// esto va en .env MONGODB_URI = mongodb://localhost/mernstack
// esto va de ej en .env PORT = 3000