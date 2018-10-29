import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user: string;
  password: string;

  constructor(private auth: AuthService, 
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  login() {
    this.auth.login(this.user, this.password)
    .then(() => {
      this.router.navigate(['/customers']);
    })
    .catch(error => {
      this.errorHandler.handle(error);
      this.password = '';
    });
  }
}
