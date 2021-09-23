import { Component, OnInit } from '@angular/core';
import { FormAPIService } from '../services/form-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor (private postId: FormAPIService) {}

  ngOnInit() { }

  onSubmit(userForm: any){
    console.log(userForm.value);
    this.postId.reutrnAPI(userForm.value).subscribe((response)=>{console.log(response)})
  }

}