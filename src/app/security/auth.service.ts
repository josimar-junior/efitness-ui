import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: Http) { }

  login(user: string, password: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ZWZpdG5lc3M6ZWZpdG5lc3MxMjM=');

    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
          console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  }
}
