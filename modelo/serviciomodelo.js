const express = require("express")
const { createReadStream } = require('fs')
//var modeloUsario = require('./usuario')
//var modeloubicacione = require('./ubicacione')
//var modeloinmueble = require('./ubicacione')

const app = new express();
const HTML_CONTENT_TYPE = 'text/html'

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("public"));

const path = require("path");
var modeloUsario = require('./usuario')
var modeloinmueble = require('./inmueble')
var modeloUbicacion = require('./ubicacione')

require('./conexion')


app.post("/upload", (req, res) => {
  //crea el esquema
  var myobj = { cedula: req.body.cedula, nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo, telefono: req.body.telefono, clave: req.body.clave };

  modeloUsario.collection.insertOne(myobj, function (err, res) {
    if (err) throw err;
  })
  res.send("datos creados")
})

modeloUbicacion.find({}, (err, docs) => {
  let listaCiudades = []
  for (let i = 0; i < docs.length; i++) {
    listaCiudades.push(docs[i].ciudad)
  }
  listaCiudades = listaCiudades.filter((item, index) => {
    return listaCiudades.indexOf(item) === index;
  })
  console.log(listaCiudades);
  res.send(listaCiudades)
})





//Insertar un inmueble
app.post("/insertarInmueble", (req, res) => {
  //Hacer el filtro 
  modeloUbicacion.find({ ciudad: 'Bogotá', barrio: 'Salina' }, (err, docs) => {
    //crea el esquema
    var myobj = { tipo: req.body.tipo, no_hab: req.body.no_hab, ubicacion: docs[0]._id, precio: req.body.precio, telefono: req.body.telefono };
    modeloinmueble.collection.insertOne(myobj, function (err, res) {
      if (err) throw err;
    })
  })
  res.send("datos creados")
})



app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
  createReadStream('./index.html').pipe(res)
})

app.listen(600, () => {
  console.log("aplicacion corriendo en el puerto 600")
})
