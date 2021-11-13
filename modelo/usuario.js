var mongoose=require("mongoose")
const usuarioEsquema=mongoose.Schema(
    {
        cedula:{type: String},
        nombre:{type: String},
        apellido:{type:String},
        correo:{type:String},
        telefono:{type:String},
        clave:{type:String}
    }
)

module.exports=mongoose.model('usuarios',usuarioEsquema)