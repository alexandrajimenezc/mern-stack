const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req,res) => {
   const notes = await Note.find();// devuelve  array [{},{},{}] con las notas de la base de dato
    res.json(notes);
}

notesCtrl.createNote = async (req,res) =>{

    const {title, content,date,author} =req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save();
    //console.log(newNote)
    res.json({message:'Note Saved'})


   /*  const{ test }= req.body;// extraigo el test y veo por consola
    console.log(test)
    res.json({message:'Note Saved'})
 */
   // console.log(req.body)// representa lod datos que enia el cliente
}


notesCtrl.getNote = async(req,res) => {

  const note = await Note.findById(req.params.id);
  //console.log(note)
  //  console.log(req.params.id)// recibe el id de notes.js
    res.json(note)
}


notesCtrl.updateNote = async (req,res) => {
    const{title , content , author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    });
//console.log( req.params, req.body)
    res.json({message:'NOTE UPDATED'})
}




notesCtrl.deleteNote = async (req,res) =>{

    await Note.findByIdAndDelete(req.params.id);
    res.json({message:'NOTE DELETE'})
}


module.exports = notesCtrl;





/* notesCtrl.getNotes = (req,res) =>res.json({message: []}) */
/* 
para ver la nota del console.log , voy a insomia
y toco en header , new header : Content-Type  new value : application/json ,
luego toco body y lo coloco en json y escribo
{
	"test" : "this is a test"
}

esto me sale en el terminal
luego cambio el console.log a const


}
*/