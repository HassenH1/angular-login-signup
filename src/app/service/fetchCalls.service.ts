import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchCallsService {

  private BASE_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  SignUpUser(user){
    return this.http.post(`${this.BASE_URL}/signup` , {
      body: JSON.stringify(user)
    })
  }
}
