import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListApiService {

  constructor(private http:HttpClient) { }
  public link = "https://6149eb7807549f001755a6d5.mockapi.io/user";

  getTodoList(){
    return this.http.get(this.link);
  }
  addTodoList(data:any){
    return this.http.post(this.link,data);
  }
}
