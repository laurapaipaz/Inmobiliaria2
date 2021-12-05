import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';

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
import { FormsModule } from "@angular/forms";
import { ConsultaCasasComponent } from './consulta-casas/consulta-casas.component'
import { ConsultaCasasService } from './consulta-casas.service';
import { UsersService } from "./users.service";
//import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    ConsultaInmuebleComponent,
    HomeComponent,
    IngresarUsuarioComponent,
    ConsultaCasasComponent
  ],
  imports: [
    //Arrancar el browser
    BrowserModule,
    //Manejar el routing
    AppRoutingModule,
    //Agregar el modulo del routing
    HttpClientModule,
    //Recoger lo que esta en los inputs
    FormsModule
  ],
  //Le voy a proveer
  //Se debe crear un servicio por cada componente 1:09
  providers: [ConsultaInmueblesService,RegistrarUsuarioService, ConsultaCasasService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
