import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Utilizar http client
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ConsultaInmuebleComponent } from './consulta-inmueble/consulta-inmueble.component';
import { ConsultaInmueblesService } from './consulta-inmuebles.service';
import { HomeComponent } from './home/home.component';
import { IngresarUsuarioComponent } from './ingresar-usuario/ingresar-usuario.component';
import { RegistrarUsuarioService } from './registrar-usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    ConsultaInmuebleComponent,
    HomeComponent,
    IngresarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Agregar el modulo del routing
    HttpClientModule
  ],
  //Le voy a proveer
  //Se debe crear un servicio por cada componente 1:09
  providers: [ConsultaInmueblesService,RegistrarUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
