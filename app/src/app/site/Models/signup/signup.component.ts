import { Component,inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username : string = ''
  password : string = ''
  auth : Auth = inject(Auth)

  async CreateUser (){
    await createUserWithEmailAndPassword(this.auth,this.username,this.password)
    alert("New User Account is created")
  }
}
