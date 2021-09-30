import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PintrestTodoListAPIService {

  constructor(private http: HttpClient) { }
  link = "https://6149eb7807549f001755a6d5.mockapi.io/pintrest-todo-list-API";

  getTodoList(){
    return this.http.get(this.link);
  }
  addTodoList(data:any){
    console.log(data);
    return this.http.post(this.link,data);
  }
}
