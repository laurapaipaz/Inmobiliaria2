import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultaCasasService {

  constructor(private http: HttpClient ) { }


  getConsultaCasas(){
    return this.http.get("http://localhost:600/consultaCasas?tipo=casa")

  }
}
