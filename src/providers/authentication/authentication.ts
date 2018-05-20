import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  private oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(public http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic bWV1c2xpdnJvczptZXVzbDF2cjBz');

    let body = `username=${username}&password=${password}&grant_type=password`;
    return this.http.post<any>(this.oauthTokenUrl, body, { headers: headers })
      .map(res => {
        this.aramzernarToken(res);
        return res;
      })
      .catch(err => {
        if (err.status == 400) {
          err.message = 'Usuário ou senha invalida';
        }
        return Observable.throw(err)
      });
  }

  private aramzernarToken(res: any) {
    localStorage.setItem('token', `Bearer ${res.access_token}`);
  }

}
