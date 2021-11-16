const express=require("express")
const {createReadStream}=require('fs')
//var modeloUsario = require('./usuario')
//var modeloubicacione = require('./ubicacione')
//var modeloinmueble = require('./ubicacione')

const app=new express();
const HTML_CONTENT_TYPE = 'text/html'

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("public"));

const path = require("path");
var modeloUsario= require('./usuario')

require('./conexion')
//var modelo2=require('./zonas')

app.post("/upload", (req, res) => {
    var myobj = { cedula: req.body.cedula, nombre:req.body.nombre, apellido:req.body.apellido, correo: req.body.correo,telefono: req.body.telefono, clave: req.body.clave  };
    modeloUsario.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
  
    })
    res.send("datos creados")
    })
  
  
  
  
  
  /*
  modeloUsario.find({}, (err, docs) => {
  
       console.log(docs[2].nombre)
  
  })
  */
    //})
  
    app.get('/', (req, res) => {
      res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
   
  
    createReadStream('./index.html').pipe(res)
  //res.end("hola mundo");
     
    })
  
  
    app.listen(600, () => {
  
      console.log("aplicacion corriendo en el puerto 600")
      
      })