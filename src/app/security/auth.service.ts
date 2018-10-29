import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  private jwtHelperService = new JwtHelperService();

  constructor(private http: Http) {
    this.loadToken();
  }

  login(user: string, password: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ZWZpdG5lc3M6ZWZpdG5lc3MxMjM=');

    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        this.tokenStore(response.json().access_token);
      })
      .catch(response => {
        if(response.status === 400) {
          const json = response.json();
          if(json.error === 'invalid_grant') {
            return Promise.reject('Invalid user or password');
          }
        }
        return Promise.reject(response);
      });
  }

  private tokenStore(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token)
      this.tokenStore(token);
  }
}
