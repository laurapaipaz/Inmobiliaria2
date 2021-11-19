const { ObjectId} = require ('bson')
var mongoose=require("mongoose")
const inmuebleEsquema=mongoose.Schema(
    {
        tipo:{type: String},
        no_hab:{type: String},
        ubicacion:{type: ObjectId},
        precio:{type:Number},
        telefono:{type:String},
        imagen:{type:String}
    }
)

module.exports=mongoose.model('inmuebles',inmuebleEsquema)