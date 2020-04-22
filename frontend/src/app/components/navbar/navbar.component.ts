import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../../Services/auth.service';
import { HttpServiceService  } from '../../Services/http-service.service';
import { TokenService  } from '../../Services/token.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public LoggedIn;
  constructor(
    private Auth:AuthService,
    private httpService:HttpServiceService,
    private token:TokenService
  ) { }

  ngOnInit() {
    (this.Auth.AuthStatus.subscribe(_value=>this.LoggedIn=_value));
    console.log(this.LoggedIn);
  }

 logout()
 {
   this.token.RemoveToken();
   this.Auth.ChangeStatus(false);
   this.router.navigateByUrl("")  ;
 }

}
