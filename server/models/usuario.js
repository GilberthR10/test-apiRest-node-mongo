const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es necesario']        
    },

    email:{
        type:String,
        required:[true,'El correo es necesario']        
    },
    password:{
        type:String,
        required:[true,'La contraseña es necesaria']        
    },
    img:{
        type:String,
        required:false
        
    },
    role:{
        type:String,
        default:'USER_ROLE'
    },
        
    estado:{   
        type:Boolean,
        default:true
    },
    google:{   
        type:Boolean,
        default:false
    },

});

usuarioSchema.method.toJSON = function (){

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
} 

module.exports = mongoose.model('Usuario',usuarioSchema);

