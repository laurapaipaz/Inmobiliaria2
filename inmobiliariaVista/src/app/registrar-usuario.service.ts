import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  constructor(private http: HttpClient) { }


  registrarUsuario(usuario:Data) {
    this.http.put("http://localhost:400/registrar-usuario",usuario).subscribe(data=>{
      console.log(data)
    })
    
  }
}
