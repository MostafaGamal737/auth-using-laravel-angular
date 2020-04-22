import { Component, OnInit } from '@angular/core';
import { HttpServiceService  } from '../../Services/http-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form=
  {
    'name':null,
    'email':null,
    'password':null,
    'password_confirmation':null,
  };
  public path="http://localhost:8000/api/auth/signup";
  public Error=[];
  constructor(private httpService:HttpServiceService) { }

  ngOnInit() {
  }

  OnSubmit(){
      this.httpService.Sendhttp(this.path,this.form).subscribe(
      data=>console.log(data),
      error=>this.handelError(error));
  }
  handelError(error)
  {
    this.Error=error.error.errors;

  }
}
