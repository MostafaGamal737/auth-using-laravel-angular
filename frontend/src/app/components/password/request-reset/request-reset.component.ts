import { Component, OnInit } from '@angular/core';
import { HttpServiceService  } from '../../../Services/http-service.service';
import { SnotifyService } from 'ng-snotify';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public path="http://localhost:8000/api/auth/ResetPassord";
  public Error="";
  constructor(private http:HttpServiceService,private snotify:SnotifyService) { }
  public form=
  {
    'email':null
  };
  ngOnInit() {
  }
  OnSubmit()
  {
    this.http.Sendhttp(this.path,this.form).subscribe(
      data=>this.handelToken(data),
      error=>this.snotify.error(error.error.error)
    );
  }
  handelError(error)
  {
    this.Error=error.error.error;

  }
  handelToken(token)
  {
    

  }
}
