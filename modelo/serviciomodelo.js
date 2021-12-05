const express = require("express")
const { createReadStream } = require('fs')
//var modeloUsario = require('./usuario')
//var modeloubicacione = require('./ubicacione')
//var modeloinmueble = require('./ubicacione')
var cors = require('cors')
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

app.use(cors());

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
  //res.send(listaCiudades)
})

//Insertar un inmueble
//******************** */
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

//Insertar un usuaurio
//******************* */
app.put("/registrar-usuario", (req, res) => {
  //res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  //res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  //res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
  
  //crea el esquema
  var myobj = { cedula: req.body.cedula, nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.email, telefono: req.body.telefono, clave: req.body.contraseña };
  modeloUsario.collection.insertOne(myobj, function (err, res) {
  if (err) throw err;
  })
  res.send("datos creados")
  //console.log("Respuesta del servidor por petición de registro usuario")
  
  //const respuesta={
  //  cedula: req.body.cedula,
    //nombre: req.body.nombre,
    //apellido: req.body.apellido,
    //correo: req.body.email,
    //telefono: req.body.telefono,
    //clave: req.body.contraseña

  //}

  //res.send(JSON.stringify(respuesta))
})

//Consultar inmueble
//****************** */
app.get('/consultaInmuebles', (req, res) => {
  //res.header('Access-Control-Allow-Origin', '*');
  //res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  //res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  //res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
  //createReadStream('./index.html').pipe(res)
  //console.log('Respuesta del servidor por petición de consultar inmuebles')
  const datos = {
    
    nombre: "Juan",
    apellido: "Cardona"
  }
  //recibo un json y envión un json 
  res.send(JSON.stringify(datos))
})


//Consultar casas
//*************** */
app.get('/consultaCasas', (req, res) => {
  modeloinmueble.find({tipo:req.query.tipo},(err,casas)=>{
    res.end(JSON.stringify(casas))
  })
})




app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
  createReadStream('./index.html').pipe(res)
})

app.listen(600, () => {
  console.log("aplicacion corriendo en el puerto 600")
})
