import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistrarInmuebleComponent } from './registrar-inmueble/registrar-inmueble.component';
import { ConsultaInmuebleComponent } from './consulta-inmueble/consulta-inmueble.component';
import { HomeComponent } from './home/home.component';
import { IngresarUsuarioComponent } from './ingresar-usuario/ingresar-usuario.component';
import { ConsultaCasasComponent } from './consulta-casas/consulta-casas.component'


const routes: Routes = [{
  path: 'registrar-usuario',
  component: RegistrarUsuarioComponent

},
{
  path: 'registrar-inmueble',
  component: RegistrarInmuebleComponent
},
{
path: 'consultaInmuebles',
  component: ConsultaInmuebleComponent
},
{
path: '',
  component: HomeComponent
},
{
path: 'ingresar-usuario',
  component: IngresarUsuarioComponent
}
,
{
path: 'consultaCasas',
  component: ConsultaCasasComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
