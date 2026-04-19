import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = ""
  password: string = ""
  error: any = {
    username: "",
    password: "",
    isError: false
  }

  constructor(private router: Router) {}

  ValidateInput(event: any, type: string) {
    this.error[type] = event.target.value.length === 0 ? `${type} is required` : ''
    this.error.isError = event.target.value.length === 0
  }

  AddData() {
    if (!this.error.isError) {
      // Hardcoded admin credentials
      if (this.username === 'admin' && this.password === 'admin123') {
        // Navigate to dashboard root
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert("Invalid input data");
    }
  }
}
