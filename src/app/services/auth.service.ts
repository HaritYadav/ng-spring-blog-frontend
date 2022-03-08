import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { LoginPayload } from '../dto/login-payload';
import { RegisterPayload } from '../dto/register-payload';


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
    return this.httpCLient.post(this.url + "/login", loginPayload, {responseType: "text"}).pipe(map(data=>{
      localStorage.setItem("authenticationToken", data.toString());
      localStorage.setItem("username", loginPayload.username);
      return true;
    }));
  }

  isAuthenticated(): Boolean{
    return localStorage.getItem("username")!=null;
  }
}
