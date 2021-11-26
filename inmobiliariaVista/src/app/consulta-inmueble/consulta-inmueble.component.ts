import { Component, OnInit } from '@angular/core';
import { ConsultaInmueblesService } from '../consulta-inmuebles.service';

@Component({
  selector: 'app-consulta-inmueble',
  templateUrl: './consulta-inmueble.component.html',
  styleUrls: ['./consulta-inmueble.component.css']
})
export class ConsultaInmuebleComponent implements OnInit {

  constructor(private service: ConsultaInmueblesService) { }

  ngOnInit(): void {
    this.service.getInmuebles()
  }

}
