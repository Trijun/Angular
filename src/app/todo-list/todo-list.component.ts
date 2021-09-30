import { Component, OnInit } from '@angular/core';
import { TodoListApiService } from '../services/todo-list-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private api: TodoListApiService) { }

  public object:any;
  ngOnInit(): void {
    this.api.getTodoList().subscribe((data)=>{
      console.log(data);
      this.object=data;
     
    })
  }

  buttonFunction(input:any){
    console.log(input.value);
    this.api.addTodoList(input.value).subscribe((data)=>{
        console.log(data);
    })
    this.api.getTodoList().subscribe((data)=>{
      console.log(data);
      this.object=data;
    })
  
  }
}
