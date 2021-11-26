import { Injectable } from '@angular/core';
//Permite conectarme con el servidor
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultaInmueblesService {

  constructor(private http: HttpClient) { }
  getInmuebles() {
    const headers = new HttpHeaders({
      'content-Type': 'application/x-www-form-urlencoded'
    })
    //colocamos la función que nos permite conectar cone el servidor (API)
    this.http.get("http://localhost:600/consultaInmuebles", { headers: headers }).subscribe(data => {
      console.log(data)
    })
  }
}
