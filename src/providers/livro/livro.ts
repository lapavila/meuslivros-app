import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LivroProvider {

  private apiUrl = 'http://localhost:8080/livros';

  constructor(public http: HttpClient) { }

  public findAll() {
    let headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));

    return this.http.get(this.apiUrl, { headers: headers })
      .map(res => res)
      .catch(err => Observable.throw(err));
  }

  public findById(id: number) {
    let headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));
    this.apiUrl = `${this.apiUrl}/${id}`;

    return this.http.get(this.apiUrl, { headers: headers })
      .map(res => res)
      .catch(err => Observable.throw(err));
  }

  public save(livro: any) {
    let headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));

    return this.http.post(this.apiUrl, livro, { headers: headers })
      .map(res => res)
      .catch(err => Observable.throw(err));
  }

  public delete(id: number) {
    let headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token'));
    this.apiUrl = `${this.apiUrl}/${id}`;

    return this.http.delete(this.apiUrl, { headers: headers })
      .map(res => res)
      .catch(err => Observable.throw(err));
  }

}
