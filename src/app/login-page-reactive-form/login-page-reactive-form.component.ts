import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page-reactive-form',
  templateUrl: './login-page-reactive-form.component.html',
  styleUrls: ['./login-page-reactive-form.component.css']
})
export class LoginPageReactiveFormComponent implements OnInit {
 
  constructor() {
   }

  ngOnInit() {
  }

  myForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(form: FormGroup) {
    console.log('Name', form.value.userName);
    console.log('Password', form.value.password);
  }
}

