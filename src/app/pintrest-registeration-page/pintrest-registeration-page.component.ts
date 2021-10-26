import { Component, OnInit } from '@angular/core';
import { FormAPIService } from '../services/form-api.service';

@Component({
  selector: 'app-pintrest-registeration-page',
  templateUrl: './pintrest-registeration-page.component.html',
  styleUrls: ['./pintrest-registeration-page.component.css']
})
export class PintrestRegisterationPageComponent implements OnInit {

  constructor(private api: FormAPIService) { }

  public list:any;
  link="null"

  ngOnInit(): void {
  }
  
  onSubmit(userForm: any){
    console.log();
    this.api.getAPI().subscribe((response)=>{
      this.list=response;
      for(let name of this.list){
        if((userForm.value.name== name.userName) && (userForm.value.password==name.password)){
          console.log("present in API");
          // this.link="pintrest-todo-list-page"
          break;
        }
        else{
          console.log("not present in API");
        }
      }
      })
  }

}
