import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FetchCallsService {

  private BASE_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  SignUpUser(user){
    return this.http.post(`${this.BASE_URL}/users/signup`, user)
  }

  userLogin(user){
    return this.http.post(`${this.BASE_URL}/users/login`, user)
  }
}
