import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginPayload } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload = new LoginPayload();

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password:  new FormControl()
    });
   }

  onSubmit(): void{
    this.loginPayload.username = this.loginForm.get("username")?.value;
    this.loginPayload.password = this.loginForm.get("password")?.value;

    this,this.authService.login(this.loginPayload).subscribe(
      data=>{
        alert("Success!!");
      }, error=>{
        alert("Error!!");
      }
    ); 

  }

  ngOnInit(): void {
  }

}
