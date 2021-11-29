import { Component, OnInit } from '@angular/core';
import { RegistrarUsuarioService } from '../registrar-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor(private service: RegistrarUsuarioService) { }

  ngOnInit(): void {
    //Para acceder a los metodos
    this.service.postUsuario()

  }

}
