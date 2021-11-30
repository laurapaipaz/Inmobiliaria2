import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  constructor(private http: HttpClient) { }


  registrarUsuario(usuario:Data) {
    this.http.put("http://localhost:600/registrar-usuario",usuario).subscribe(data=>{
      console.log(data)
    })
    //const headers = new HttpHeaders({
     // 'content-Type': 'application/x-www-form-urlencoded'
    //})

    //colocamos la función que nos permite conectar cone el servidor (API)
   // this.http.post("http://localhost:600/registrar-usuario", { headers: headers }).subscribe(data => {
      //console.log(data)
    //})
  }
}
