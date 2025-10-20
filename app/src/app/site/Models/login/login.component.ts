import { Component,inject} from '@angular/core';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string="";
  password:string=";"
  auth : Auth = inject(Auth)
error:any = {
  username:"",
  password:"",
  isError:false,
}
constructor(){
}
AddData(){
  console.log(this.error)
  if(this.error.isError){
    console.log("Add data called")
console.log(this.username, this.password)
  }
  else{
    alert("invalid imput data")
  }
}
ValidateInput(event:any,type:string) {
  this.error[type]=event.target.value.length===0 ? `${type} is required` : ''
  this.error.isError=event.target.value.length===0
}
}
