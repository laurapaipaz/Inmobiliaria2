const { ObjectId} = require ('bson')
var mongoose=require("mongoose")
const inmuebleEsquema=mongoose.Schema(
    {
        tipo:String,
        no_hab:String,
        ubicacion:{type:mongoose.Schema.ObjectId,ref:'ubicaciones'},
        precio:Number,
        telefono:String,
        imagen:String
    }
)

module.exports=mongoose.model('inmuebles',inmuebleEsquema)