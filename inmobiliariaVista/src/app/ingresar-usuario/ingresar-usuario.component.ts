import { Component} from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-ingresar-usuario',
  templateUrl: './ingresar-usuario.component.html',
  styleUrls: ['./ingresar-usuario.component.css']
})
export class IngresarUsuarioComponent {

  


  constructor(public userService:UsersService) { }
  login(){
    let email = (document.getElementById('email') as HTMLInputElement).value
    let password =  (document.getElementById('password') as HTMLInputElement).value
    const user ={email:email, password:password};
    this.userService.login(user).subscribe(data =>{
      //this.userService.setToken(data.Token);
    });
  }

}
