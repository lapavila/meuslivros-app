import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaProvider {

  private apiUrl = 'http://localhost:8080/categorias';

  constructor(public http: HttpClient) { }

  public findAll() {
    let headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));

    return this.http.get(this.apiUrl, { headers: headers })
      .map(res => res)
      .catch(err => Observable.throw(err));
  }

}
