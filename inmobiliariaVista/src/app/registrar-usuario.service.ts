import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  constructor(private http: HttpClient) { }
  postUsuario() {
    const headers = new HttpHeaders({
      'content-Type': 'application/x-www-form-urlencoded'
    })

    //colocamos la función que nos permite conectar cone el servidor (API)
    this.http.post("http://localhost:600/registrar-usuario", { headers: headers }).subscribe(data => {
      //console.log(data)
    })
  }
}
