import { Component, OnInit } from '@angular/core';
import { HttpServiceService  } from '../../Services/http-service.service';
import { TokenService  } from '../../Services/token.service';
import { AuthService  } from '../../Services/auth.service';
import { Router  } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private httpService:HttpServiceService,
    private token:TokenService,
    private router:Router,
    private Auth:AuthService
  ) { }

  public path="http://localhost:8000/api/auth/login";
  public Error="";
  public form=
  {
    "email":null,
    "password":null
  };
  ngOnInit() {

  }
  OnSubmit() {
      this.httpService.Sendhttp(this.path,this.form).subscribe(
      data=>this.handelToken(data),
      error=>this.handelError(error)
    );
  }
  handelError(error)
  {
    this.Error=error.error.error;

  }
  handelToken(token)
  {
    this.token.handel(token);
    this.Auth.ChangeStatus(true);
    this.router.navigateByUrl("Profile")  ;

  }

}
