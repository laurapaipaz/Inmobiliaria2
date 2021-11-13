var modeloUsario = require('./usuario')
var modeloubicacione = require('./ubicacione')
var modeloinmueble = require('./ubicacione')


require('./conexion')
//var modelo2=require('./zonas')
//app.post("/", (req, res) => {

var myobj = { cedula: "101474587", nombre: "Santiago", apellido: "Colorado", correo: "santi@gmail.com", telefono: "3214141479", clave: "12245347"};
modeloUsario.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 documento insertado");
})

var myobj = { ciudad: "Villavicencio", zona: "Sur", barrio: "Florida", direccion: "calle 45C-12"};
modeloubicacione.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("2 documento insertado");
})

var myobj = { tipo: "Apartamento", no_hab: "4", ubicacion: "618dc18b8fdeba31bfe9bb24", precio: 20000, telefono: "12457", imagen: "ruta/img.png" };
modeloinmueble.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("3 documento insertado");
})
//})