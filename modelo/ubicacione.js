var mongoose=require("mongoose")
const ubicacioneEsquema=mongoose.Schema(
    {
        ciudad:{type: String},
        zona:{type: String},
        barrio:{type:String},
        direccion:{type:String}
        
    }
)

module.exports=mongoose.model('ubicaciones',ubicacioneEsquema)