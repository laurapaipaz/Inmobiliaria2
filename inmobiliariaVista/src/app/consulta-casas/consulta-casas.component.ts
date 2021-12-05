import { Component, OnInit } from '@angular/core';
import { ConsultaCasasService } from '../consulta-casas.service';
@Component({
  selector: 'app-consulta-casas',
  templateUrl: './consulta-casas.component.html',
  styleUrls: ['./consulta-casas.component.css']
})
export class ConsultaCasasComponent implements OnInit {
casas:any
  constructor(private servicio:ConsultaCasasService) { }

  ngOnInit(): void {
    this.servicio.getConsultaCasas().subscribe(data=>{
      this.casas=data

    })
    

  }
}
