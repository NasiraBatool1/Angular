import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username: string = ""
  password: string = ""
  error: any = {
    username: "",
    password: "",
    isError: false
  }
  constructor() {

  }
  ValidateInput(event: any, type: string) {
    this.error[type] = event.target.value.length === 0 ? `${type} is required` : ''
    this.error.isError = event.target.value.length === 0
  }
  AddData() {
    console.log(this.error)
    if (!this.error.isError) {
      console.log("Add Data called")
      console.log(this.username, this.password)
    } else {
      alert("Invalid input data")
    }

  }
}
