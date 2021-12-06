import { Component, OnInit } from '@angular/core';

import { RegistrarUsuarioService } from '../registrar-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor(private service: RegistrarUsuarioService) { 

  }

  ngOnInit(): void {
    //Para acceder a los metodos
    //alert("Hola mundo")
    //this.service.registrarUsuario()
  }

registrarUsuario(){
  let email = (document.getElementById('email') as HTMLInputElement).value
  let nombre =  (document.getElementById('nombre') as HTMLInputElement).value
  let apellido =  (document.getElementById('apellido') as HTMLInputElement).value
  let cedula =  (document.getElementById('cedula') as HTMLInputElement).value
  let telefono =  (document.getElementById('telefono') as HTMLInputElement).value
  let contraseña =  (document.getElementById('clave') as HTMLInputElement).value
  
  
  var usuario ={
    email:email,
    nombre:nombre,
    apellido:apellido,
    cedula:cedula,
    telefono:telefono,
    contraseña:contraseña
  }

  this.service.registrarUsuario(usuario)
 
}

}
