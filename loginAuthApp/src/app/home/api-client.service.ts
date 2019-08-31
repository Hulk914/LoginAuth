import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  signUp(body) {
    return this.http.post('http://backend-api-cf.cfapps.io/signup', body);
  }

  signIn(body) {
    return this.http.post('http://backend-api-cf.cfapps.io/login', body);
  }
}
