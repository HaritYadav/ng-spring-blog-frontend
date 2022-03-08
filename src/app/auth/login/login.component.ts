import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPayload } from 'src/app/dto/login-payload';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload = new LoginPayload();

  constructor(private authService: AuthService,
    private router: Router) {
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
        this.router.navigateByUrl("/home");
      }, error=>{
        alert("Error!!");
      }
    ); 

  }

  ngOnInit(): void {
  }

}
