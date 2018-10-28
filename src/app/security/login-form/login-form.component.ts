import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user: string;
  password: string;

  constructor(private auth: AuthService) { }

  login() {
    this.auth.login(this.user, this.password);
  }
}
