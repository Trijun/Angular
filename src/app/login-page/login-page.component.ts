import { Component, OnInit } from '@angular/core';
import { FormAPIService } from '../services/form-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  router: any;


  constructor (private postId: FormAPIService) {}
  onswitch:any;
  ngOnInit() {
    this.onswitch=true;
   }
 
  onSubmit(userForm: any){
    this.onswitch=false;
    console.log(userForm.value);
    this.postId.reutrnAPI(userForm.value).subscribe((response)=>{console.log(response)})
    
    
  }

}