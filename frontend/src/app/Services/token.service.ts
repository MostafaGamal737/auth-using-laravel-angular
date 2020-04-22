import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
//
private iss={
  'login':'http://localhost:8000/api/auth/login'
};
  constructor() { }
  handel(token)
  {
    this.SetToken(token);

  }

  SetToken(token)
  {
    localStorage.setItem('token',token.access_token);
  }
  GetToken()
  {
  return  localStorage.getItem('token');
  }
  RemoveToken()
  {
  return  localStorage.removeItem('token');
  }

   isValid()
   {
     const  token= this.GetToken();

     if (token) {
       const payload=this.payload(token);

        if (payload) {
            return (Object.values(this.iss).indexOf(payload.iss)>-1?true:false);
        }
    }
    return false;
   }

  payload(token)
  {
    const payload= token.split('.')[1];
    return  this.decode(payload);
  }

  decode(payload)
  {
    return JSON.parse(atob(payload));
  }

 loggedIn()
 {
   return  this.isValid();
 }


}
