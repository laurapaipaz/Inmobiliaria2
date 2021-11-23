import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RegistrarInmuebleComponent } from './registrar-inmueble/registrar-inmueble.component';


const routes: Routes = [{
  path: 'registrar-usuario',
  component: RegistrarUsuarioComponent

},
{
  path: 'registrar-inmueble',
  component: RegistrarInmuebleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
