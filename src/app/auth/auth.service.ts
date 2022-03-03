import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from './register-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8080/api/auth/";

  constructor(private httpCLient: HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpCLient.post(this.url + "/signup", registerPayload);
  }
}
