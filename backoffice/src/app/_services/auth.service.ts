import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../_helpers/config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(API_URL + '/users/login', {
      email,
      password
    }, httpOptions);
  }
  register(first_name: string, last_name: string, email: string, password: string): Observable<any> {
    return this.http.post(API_URL + '/users', {
      first_name,
      last_name,
      email,
      password
    }, httpOptions);
  }
}
