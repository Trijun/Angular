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
  finished:any
  // finished:any;
  
    ngOnInit(): void {
      this.api.getTodoList().subscribe((data)=>{
        console.log(data);
        this.list=data;
        this.finished=false;
      });
    }

    onSubmit(userForm: any){

      this.api.addTodoList(userForm.value).subscribe((data)=>{
        console.log(data);
        this.ngOnInit();
      });

     
   }
   onDelete(content: any){
    console.log(content);
    this.finished=true;
    // this.contentId=content.id
     this.api.removeTodoList(content.id).subscribe((data)=>{
      this.ngOnInit();
     }
     )
   }

}
