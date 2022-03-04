import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from './login-payload';
import { RegisterPayload } from './register-payload';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8080/api/auth";

  constructor(private httpCLient: HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpCLient.post(this.url + "/signup", registerPayload);
  }

  
  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpCLient.post(this.url + "/login", loginPayload).pipe(map(data=>{
      localStorage.setItem("authenticationToken", data.toString());
      localStorage.setItem("username", loginPayload.username);
      return true;
    }));
  }
}
