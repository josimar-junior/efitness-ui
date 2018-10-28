import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user: string;
  password: string;

  constructor() { }

  login() {
    alert('User: ' + this.user + "\n Password: " + this.password);
  }
}
