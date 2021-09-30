import { Component, OnInit } from '@angular/core';
import { FormAPIService } from '../services/form-api.service';

@Component({
  selector: 'app-pintrest-registeration-page',
  templateUrl: './pintrest-registeration-page.component.html',
  styleUrls: ['./pintrest-registeration-page.component.css']
})
export class PintrestRegisterationPageComponent implements OnInit {

  constructor(private api: FormAPIService) { }

  ngOnInit(): void {
  }
  onSubmit(userForm: any){
    console.log(userForm.value);
    this.api.getAPI().subscribe((response)=>{
      console.log(response)
      })
  }

}
