// cuando inica la app  primero importa los modulos,luego la app , luego la base de datos
require('dotenv').config();
// index se encarga de xportarlo desde app
const app = require('./app');

require('./database');

async function main (){
    //app.get obtiene el valor de port de app, se remplaza por el val 4000
    await app.listen(app.get('port'));
    console.log('server on port',app.get('port'))
}
main();













//video 2 cambio a async 
//app.listen(4000,() => console.log('server on port 4000'));
