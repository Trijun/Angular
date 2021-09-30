import { Component, OnInit } from '@angular/core';
import { FormAPIService } from '../services/form-api.service';


@Component({
  selector: 'app-pintrest-login-page',
  templateUrl: './pintrest-login-page.component.html',
  styleUrls: ['./pintrest-login-page.component.css']
})
export class PintrestLoginPageComponent implements OnInit {

  constructor(private api: FormAPIService) { }

  ngOnInit(): void {
  }
  onSubmit(userForm: any){
    console.log(userForm.value);
    this.api.reutrnAPI(userForm.value).subscribe((response)=>{console.log(response)})
  }
}
