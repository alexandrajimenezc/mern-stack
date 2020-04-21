const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            index: true,
            unique: true,
            sparse: true,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('User', userSchema);



/* const {Schema , model} =require('mongoose');

const userScheman = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
},  {
        timestamps: true
    
})

module.exports= model('User',userScheman); */