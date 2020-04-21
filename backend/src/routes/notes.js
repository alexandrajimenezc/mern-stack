const {Router} = require('express');
const router = Router();
//importamos los metodos que creamo en notes.controllers
const {getNotes,createNote,getNote, updateNote,deleteNote} =require('../controllers/notes.controllers')


// desde nuestro enrutador que escuche una ruta
// el / significa la ruta raiz  o sea '/api/notes'


router.route('/')
    .get(getNotes)
    .post(createNote)
  




    router.route('/:id')
    .get(getNote) 
    .put(updateNote) 
     .delete(deleteNote)

    
    
    
    




    
    
    
    module.exports = router;
    







/* router.route('/')
    .get((req,res) => res.send('GET -Notes Routes'))
    .post((req,res) => res.send('POST-Notes Routes'))
   */

// router.route('/:id')
    //  .get()  
    //  .put() 
    //.delete()



    /* peticiones
    .get() devolver algo
    .post() para guardar
    .put() actualizar datos
    .delete() para borrar
    .patch() actiualizar solo una propiedad o un dato
    */