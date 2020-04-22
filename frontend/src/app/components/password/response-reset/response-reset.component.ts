import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService  } from '../../../Services/http-service.service';
@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  constructor(private httpService:HttpServiceService,private activated:ActivatedRoute) {
    activated.queryParams.subscribe(params=>{
      this.form.remember_token=params['token']
    });
   }
  public form=
  {

    'password':null,
    'password_confirmation':null,
    'remember_token':null,
  };
  public path="http://localhost:8000/api/auth/change_password";
  public Error=[];
  public success=null;
  ngOnInit() {

  }

  OnSubmit(){
      this.httpService.Sendhttp(this.path,this.form).subscribe(
      data=>this.Success(data),
      error=>this.handelError(error));
  }
  handelError(error)
  {
    this.Error=error.error.errors;
  }
  Success(data)
  {
    return this.success=data.success;
  }

}
