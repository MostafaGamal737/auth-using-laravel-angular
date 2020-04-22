import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService  } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn=new BehaviorSubject<boolean>(this.token.loggedIn());
  AuthStatus=this.loggedIn.asObservable();
  ChangeStatus(value:boolean)
  {
    this.loggedIn.next(value);
    console.log(this.loggedIn);
  }
  constructor(private token:TokenService) { }

}
