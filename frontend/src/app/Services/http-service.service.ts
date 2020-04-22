import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  
  Sendhttp(path,data)
  {
      return this.http.post(path,data);
  }
}
