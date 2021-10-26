import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormAPIService {

  constructor(private http: HttpClient) { 
  }
  getAPI(){
    return this.http.get("https://6149eb7807549f001755a6d5.mockapi.io/formAPI");
  }
  reutrnAPI(data:any){
    console.log(data);
    return this.http.post("https://6149eb7807549f001755a6d5.mockapi.io/formAPI",{name:data});
  }
}
