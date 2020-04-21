// require mongose , pero esta vez su Schema y su model

const {Schema , model }=require('mongoose');

//propiedades que quiero tenga la nota
const noteSchema = new Schema({
    
    title: String,
    content:{
        
        type: String,
        required: true
    }, 
    author: String,
    date: {
        type : Date,
        default: Date.now
    }

},{
    timestamps:true
});

//model usa el schema y lo exportamos

module.exports = model('Note', noteSchema);