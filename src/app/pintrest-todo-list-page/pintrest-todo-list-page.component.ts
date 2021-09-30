import { Component, OnInit } from '@angular/core';
import { PintrestTodoListAPIService } from '../services/pintrest-todo-list-api.service';

@Component({
  selector: 'app-pintrest-todo-list-page',
  templateUrl: './pintrest-todo-list-page.component.html',
  styleUrls: ['./pintrest-todo-list-page.component.css']
})
export class PintrestTodoListPageComponent implements OnInit {

  constructor(private api: PintrestTodoListAPIService) { }

  public list:any;
  
    ngOnInit(): void {
      this.api.getTodoList().subscribe((data)=>{
        console.log(data);
        this.list=data;
      });
    }

    onSubmit(userForm: any){

      this.api.addTodoList(userForm.value).subscribe((data)=>{
        console.log(data);
      });

      this.api.getTodoList().subscribe((data)=>{
        console.log(data);
        this.list=data;
      })
   }

}
