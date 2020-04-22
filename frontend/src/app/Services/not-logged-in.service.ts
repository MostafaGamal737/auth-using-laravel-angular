import { Injectable } from '@angular/core';
import { Observable } from '@rxis/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { TokenService  } from './token.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NotLoggedInService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot): boolean {
            return !this.token.loggedIn();
  }



  constructor(private token:TokenService) { }
}
